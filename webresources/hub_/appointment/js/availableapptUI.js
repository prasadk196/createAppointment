var data = new Data();
var DEFAULT_START_TIME = "8:00 AM";
var DEFAULT_END_TIME = "9:00 AM";
var currentCalendarDate = moment(new Date()).format("YYYY-MM-DD");

setTimeout(function () {
    var appointment = new Appointment();
    wjQuery('.headerDate').text(moment(currentCalendarDate).format('MM/DD/YYYY'));
    setTimeout(function () {
        function fetchResources(fetchData) {
            wjQuery(".loading").show();
            // Get duraion from user
            var weekInfo = appointment.getCurrentWeekInfo(currentCalendarDate);
            var startDate = moment(weekInfo.firstDay).format('YYYY-MM-DD');
            var endDate = moment(weekInfo.lastDay).format('YYYY-MM-DD');
            var eventDuration = appointment.getCalendarEventDuraion(data.getAppointmentHours(startDate,endDate, false));
            appointment.loadCalendar(currentCalendarDate, eventDuration);

            wjQuery('.nextBtn').off('click').on('click', function () {
                wjQuery(".loading").show();
                appointment.next();
            });

            wjQuery('.prevBtn').off('click').on('click', function () {
                wjQuery(".loading").show();
                appointment.prev();
            });

            wjQuery('#datepicker').datepicker({
                buttonImage: "/webresources/hub_/calendar/images/calendar.png",
                buttonImageOnly: true,
                changeMonth: true,
                changeYear: true,
                showOn: 'button',
                minDate: '0', 
                onSelect: function (date) {
                    wjQuery(".loading").show();
                    appointment.dateFromCalendar(date);
                    wjQuery('#datepicker').hide();
                }
            });
            appointment.refreshCalendarEvent(true);
        }
        fetchResources(true);
    }, 500);        
}, 500);
    

function Appointment(){
    this.appointment = undefined;
    this.appointmentList = [];
    this.eventList = [];
    this.appointmentHours = [];

    this.clearEvents = function () {
        var self = this;
        self.appointment.fullCalendar('removeEvents');
        self.appointment.fullCalendar('removeEventSource');
        self.eventList = [];
        self.appointmentList = [];
        self.appointmentHours = [];
    }

    this.getCalendarEventDuraion = function (args){
        var self = this;
        args = args == null ? [] : args;
        // Deafault assign it to 60 Min.
        var eventDuration = 60;
        if(args.length){
            for(var i=0; i< args.length; i++){
                eventDuration = args[i]['aworkhours_x002e_hub_duration'];
                // var eventColorObj = self.getEventColor(args[i]['aworkhours_x002e_hub_type']);
                // eventDuration = eventColorObj['slotMinutes'] == undefined ? 60 : eventColorObj['slotMinutes'];
                break;
            }
        }
        return eventDuration;
    }

    this.formatObjects = function(args, label){
        args = args == null ? [] : args; 
        var self = this;
        var tempList = [];
        if(label == "appointmentList"){
            tempList = [];
            wjQuery.each(args, function(index, appointmentObj) {
                var startObj = new Date(appointmentObj['hub_start_date']+" "+appointmentObj['hub_starttime@OData.Community.Display.V1.FormattedValue']);
                var endObj = new Date(appointmentObj['hub_end_date']+" "+appointmentObj['hub_endtime@OData.Community.Display.V1.FormattedValue']);
                tempList.push({
                    type:appointmentObj['hub_type'],
                    typeValue:appointmentObj['hub_type@OData.Community.Display.V1.FormattedValue'],
                    startDate:appointmentObj['hub_start_date'],
                    startTime:appointmentObj['hub_starttime@OData.Community.Display.V1.FormattedValue'],
                    endDate:appointmentObj['hub_end_date'],
                    endTime:appointmentObj['hub_endtime@OData.Community.Display.V1.FormattedValue'],
                    startObj:startObj,
                    endObj:endObj,
                });
            });
        }else if(label == "appointmentHours"){
            tempList = [];
            wjQuery.each(args, function(index, appointmentHour) {
                var startObj = new Date(appointmentHour['hub_effectivestartdate']+" "+appointmentHour['hub_starttime@OData.Community.Display.V1.FormattedValue']); 
                var endObj = new Date(appointmentHour['hub_effectiveenddate']+" "+appointmentHour['hub_endtime@OData.Community.Display.V1.FormattedValue']); 
                tempList.push({
                    type:appointmentHour['aworkhours_x002e_hub_type'],
                    typeValue:appointmentHour['aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue'],
                    startObj:startObj,
                    startDate:appointmentHour['hub_effectivestartdate'],
                    startTime:appointmentHour['hub_starttime@OData.Community.Display.V1.FormattedValue'],
                    endDate:appointmentHour['hub_effectiveenddate'],
                    endTime:appointmentHour['hub_endtime@OData.Community.Display.V1.FormattedValue'],
                    endObj:endObj,
                    capacity:appointmentHour['hub_capacity'],
                    day:appointmentHour['hub_days'],
                    dayVal:appointmentHour['hub_days@OData.Community.Display.V1.FormattedValue']
                });
            });
            this.appointmentHours = tempList;
        }
        return tempList;
    }

    this.loadCalendar = function (args, eventDuration) {
        var self = this;
        // assign filter object to local scope filter to avoid this conflict
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        this.calendarOptions = {
            header: false,
            defaultView: 'agendaWeek',
            disableResizing: true,
            minTime: 8,
            maxTime: 20,
            allDayText: '',
            allDaySlot:false,
            droppable: false,
            handleWindowResize: true,
            height: window.innerHeight - 120,
            slotMinutes: eventDuration,
            selectable: false,
            slotEventOverlap: true,
            selectHelper: false,
            // select: function (start, end, allDay, event, resourceId) {
            //     console.log(start, end, allDay, event, resourceId);
            //     // setTimeout(function(){
            //     //     window.close();
            //     // }, 500);
            // },
            eventClick: function(calEvent, jsEvent, view) {
                // console.log(calEvent, jsEvent, view);
                if(new Date().getTime() < calEvent.start.getTime()){
                    self.confirmPopup(calEvent.start,calEvent.end,"Do you wish to create Appointment?");
                }else{
                    self.prompt("Not allowed to create Appointment");
                }
            },
            editable: false,
            events: self.eventList
        };

        if (args != undefined) {
            args = new Date(args);
            this.calendarOptions.year = args.getFullYear();
            this.calendarOptions.month = args.getMonth();
            this.calendarOptions.date = args.getDate();
        }
        self.appointment = wjQuery('#appointment').fullCalendar(this.calendarOptions);
        var today = new Date().getDay();
        var currnetDay = new Date(moment(new Date()).format('MM/DD/YYYY'));
        var thDate = new Date(wjQuery(".headerDate").text());
        if(currnetDay.getMonth() == thDate.getMonth() && currnetDay.getDay() == thDate.getDay()){
            // wjQuery("th.fc-col"+today).css("backgroundColor","#cecece");
        }
    }

    this.next = function () {
        var self = this;
        self.clearEvents();
        this.appointment.fullCalendar('next');
        var currentCalendarDate = this.appointment.fullCalendar('getDate');
        wjQuery('.headerDate').text(moment(currentCalendarDate).format('MM/DD/YYYY'));
        if (moment(currentCalendarDate).format('MM/DD/YYYY') == moment(new Date()).format('MM/DD/YYYY')) {
            wjQuery('.headerDate').addClass('today');
        }else {
            wjQuery('.headerDate').removeClass('today');
        }
        var currentView = this.appointment.fullCalendar('getView');
        if (currentView.name == 'resourceDay') {
            var dayOfWeek = moment(currentCalendarDate).format('dddd');
            var dayofMonth = moment(currentCalendarDate).format('M/D');
            wjQuery('thead .fc-agenda-axis.fc-widget-header.fc-first').html(dayOfWeek + " <br/> " + dayofMonth);
        }
        currentCalendarDate = moment(currentCalendarDate).format("YYYY-MM-DD");
        self.refreshCalendarEvent(true);
    }

    this.prev = function () {
        var self = this;
        var currentCalendarDate = this.appointment.fullCalendar('getDate');
        if(currentCalendarDate > new Date()){
            self.clearEvents();
            this.appointment.fullCalendar('prev');
            wjQuery('.headerDate').text(moment(currentCalendarDate).format('MM/DD/YYYY'));
            if (moment(currentCalendarDate).format('MM/DD/YYYY') == moment(new Date()).format('MM/DD/YYYY')) {
                wjQuery('.headerDate').addClass('today');
            }else {
                wjQuery('.headerDate').removeClass('today');
            }
            var currentView = this.appointment.fullCalendar('getView');
            if (currentView.name == 'resourceDay') {
                var dayOfWeek = moment(currentCalendarDate).format('dddd');
                var dayofMonth = moment(currentCalendarDate).format('M/D');
                wjQuery('thead .fc-agenda-axis.fc-widget-header.fc-first').html(dayOfWeek + " <br/> " + dayofMonth);
            }
            currentCalendarDate = moment(currentCalendarDate).format("YYYY-MM-DD");
            this.refreshCalendarEvent(true);
        }else{
            wjQuery(".loading").hide();
        }
    }

    this.dateFromCalendar = function (date, locationId) {
        var self = this;
        self.clearEvents();
        var displayDate = new Date(date);
        self.appointment.fullCalendar('gotoDate', displayDate);
        wjQuery('.headerDate').text(date);
        if (moment(date).format('MM/DD/YYYY') == moment(new Date()).format('MM/DD/YYYY')) {
            wjQuery('.headerDate').addClass('today');
        }
        else {
            wjQuery('.headerDate').removeClass('today');
        }
        var dayOfWeek = moment(date).format('dddd');
        var dayofMonth = moment(date).format('M/D');
        wjQuery('thead .fc-agenda-axis.fc-widget-header.fc-first').html(dayOfWeek + " <br/> " + dayofMonth);
        var currentCalendarDate = moment(date).format("YYYY-MM-DD");
        self.refreshCalendarEvent(true);
    }

    this.refreshCalendarEvent = function (fetchData) {
        var self = this;
        setTimeout(function () {
            var currentCalendarDate = self.appointment.fullCalendar('getDate');
            var currentView = self.appointment.fullCalendar('getView');
            if (currentView.name == 'agendaWeek') {
                var weekInfo = self.getCurrentWeekInfo(currentCalendarDate);
                var startDate = moment(weekInfo.firstDay).format('YYYY-MM-DD');
                var endDate = moment(weekInfo.lastDay).format('YYYY-MM-DD');
                if(fetchData){
                    self.appointmentHours = self.formatObjects(data.getAppointmentHours(startDate,endDate, false), "appointmentHours");
                    self.appointmentList = self.formatObjects(data.getAppointment(startDate,endDate, false), "appointmentList");
                }
                self.populateAppointmentHours(self.appointmentHours);
                self.populateAppointment(self.appointmentList);
            }
        }, 300);
    }

    this.getEventColor = function(eventType){
        var eventTypeList = data.getAppointmentType();
        for (var i = 0 ; i < eventTypeList.length; i++) {
            if(eventType == eventTypeList[i]["type"]){
                return eventTypeList[i];
                break;
            }
        }
    }

    this.populateAppointmentHours = function(appointmentHours){
        var self = this;
        appointmentHours = appointmentHours == null ? [] : appointmentHours;
        if(appointmentHours.length){
            wjQuery.each(appointmentHours, function (index, appointmentHrObj) {
                var response = self.checkDateRage(appointmentHrObj['startDate'],appointmentHrObj['endDate'], appointmentHrObj['day']);
                if(response != false){
                    appointmentHrObj['startObj'] = new Date(moment(response).format("YYYY-MM-DD")+" "+appointmentHrObj['startTime']);
                    appointmentHrObj['endObj'] = new Date(moment(response).format("YYYY-MM-DD")+" "+appointmentHrObj['endTime']);
                    var eventColorObj = self.getEventColor(appointmentHrObj["type"]);
                    var eventId = appointmentHrObj["type"]+"_"+appointmentHrObj['startObj'];
                    var eventPopulated = self.appointment.fullCalendar('clientEvents', eventId);
                    if(eventPopulated.length){
                        eventPopulated[0].capacity += appointmentHrObj['capacity'];
                        eventPopulated[0].title = "0/"+eventPopulated[0].capacity;
                    }else{
                        var eventObj = {};
                        eventObj = {
                            id:eventId,
                            start:appointmentHrObj['startObj'],
                            end:appointmentHrObj['endObj'],
                            allDay : false,
                            type:appointmentHrObj['type'],
                            typeValue:appointmentHrObj['typeValue'],
                            borderColor:eventColorObj.borderColor,
                            color:"#333",
                            title:"0/"+appointmentHrObj['capacity'],
                            backgroundColor:eventColorObj.backgroundColor,
                            studentList:[],
                            parentList:[],
                            occupied:0,
                            capacity:appointmentHrObj['capacity']
                        }
                        self.eventList.push(eventObj);
                        self.appointment.fullCalendar('removeEvents');
                        self.appointment.fullCalendar('removeEventSource');
                        self.appointment.fullCalendar('addEventSource', { events: self.eventList });
                    }
                    self.appointment.fullCalendar('refetchEvents');
                }
            });
            wjQuery(".loading").hide();
        }else{
            wjQuery(".loading").hide();
        }
    }

    this.populateAppointment = function(appointmentList){
        var self = this;
        appointmentList = appointmentList == null ? [] : appointmentList;
        if(appointmentList.length){
            wjQuery.each(appointmentList, function(index, appointmentObj){
                var eventColorObj = self.getEventColor(appointmentObj["type"]);
                var eventId = appointmentObj["type"]+"_"+appointmentObj['startObj'];
                var eventPopulated = self.appointment.fullCalendar('clientEvents', eventId);
                if(eventPopulated.length){
                    eventPopulated[0].occupied += 1; 
                    eventPopulated[0].title = eventPopulated[0].occupied+"/"+ eventPopulated[0].capacity;
                }else{
                    var eventObj = {};
                    eventObj = {
                        id:eventId,
                        start:appointmentObj['startObj'],
                        end:appointmentObj['endObj'],
                        allDay : false,
                        type:appointmentObj['type'],
                        typeValue:appointmentObj['typeValue'],
                        borderColor:eventColorObj.borderColor,
                        color:"#333",
                        title:"0/"+appointmentObj['capacity'],
                        backgroundColor:eventColorObj.backgroundColor,
                        studentList:[],
                        parentList:[],
                        occupied:0,
                        capacity:appointmentObj['capacity']
                    }
                    self.eventList.push(eventObj);
                    self.appointment.fullCalendar('removeEvents');
                    self.appointment.fullCalendar('removeEventSource');
                    self.appointment.fullCalendar('addEventSource', { events: self.eventList });
                }
                self.appointment.fullCalendar('refetchEvents');
            });
        }else{
            wjQuery(".loading").hide();
        }
    }

    this.getCurrentWeekInfo = function(newDate){
        var curr = new Date(newDate);
        var first = curr.getDate() - curr.getDay();
        var last = first + 6;
        var firstDay = new Date(curr.setDate(first));
        var lastDay = new Date(curr.setDate(last));
        return {firstDay:firstDay, lastDay:lastDay};
    }

    this.confirmPopup = function (slotStart, slotEnd, message) {
        slotStart = moment(slotStart).format('DD-MM-YYYY hh:mm A');
        slotEnd = moment(slotEnd).format('DD-MM-YYYY hh:mm A');
        var msg = "<p>Start: "+slotStart+"</p>"+
                  "<p>End: "+slotEnd+"</p>"+
                  "<p>"+message+"</p>";
        wjQuery("#dialog > .dialog-msg").html(msg);
        wjQuery("#dialog").dialog({
            resizable: false,
            height: "auto",
            width: 350,
            modal: true,
            buttons: {
                Yes: function () {
                    data.getSlotDeatil(slotStart, slotEnd);
                    console.log(slotStart, slotEnd);
                    wjQuery(this).dialog("close");
                },
                No: function () {
                    wjQuery(this).dialog("close");
                }
            }
        });
    }

    this.prompt = function(msg){
        wjQuery("#dialog > .dialog-msg").html(msg);
        wjQuery("#dialog").dialog({
            resizable: false,
            height: "auto",
            width: 350,
            modal: true,
            buttons: {
                Cancel: function () {
                    wjQuery(this).dialog("close");
                }
            }
        });
    }

    this.checkDateRage = function(start, end, day){
        var self = this;
        var currentView = self.appointment.fullCalendar('getView');
        start = new Date(start);
        var returnDate = false;
        if(end == undefined){
           end = new Date(moment(currentView.end).format("YYYY-MM-DD"));
        }else{
            end = new Date(end);
        }
        currentView.start = new Date(moment(currentView.start).format("YYYY-MM-DD"));
        currentView.end = new Date(moment(currentView.end).format("YYYY-MM-DD"));
        var curr = currentView.start; 
        var first = curr.getDate() - curr.getDay()
        var firstday = (new Date(curr.setDate(first+1))).toString();
        for(var i = 0;i<7;i++){
            var next = first + i;
            var nextday = new Date(curr.setDate(next));
            if(nextday.getDay() === day){
                returnDate = nextday;
                break;
            }
        }
        if(start.getTime() <= returnDate.getTime() && returnDate.getTime() <= end.getTime()){
            return returnDate;
        }else{
            return false;
        }
    }

    this.getWeek = function(fromDate){
        var sunday = new Date(fromDate.setDate(fromDate.getDate()-fromDate.getDay()));
        var result = [new Date(sunday)];
        while (sunday.setDate(sunday.getDate()+1) && sunday.getDay()!==0) {
          result.push(new Date(sunday));
        }
        return result;
    }
}

