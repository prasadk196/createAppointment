var MASTER_SCHEDULE_CONST = 35;
 
  var appointmentType = [
    {
      type:0,
      name:"Instructional",
      borderColor:"red",
      backgroundColor:"red",
      display:"customer",
      slotMinutes:30
    },
    {
      type:1,
      name:"Center Visit",
      borderColor:"#7bc143",
      backgroundColor:"#dff0d5",
      display:"customer",
      slotMinutes:30
    },
    {
      type:2,
      name:"Practice Test",
      borderColor:"#9acaea",
      backgroundColor:"#ebf5fb",
      display:"student",
      slotMinutes:30
    },
    {
      type:3,
      name:"School Visit",
      borderColor:"red",
      backgroundColor:"red",
      display:"customer",
      slotMinutes:30
    },
    {
      type:4,
      name:"Welcome Conference",
      borderColor:"#7bc143",
      backgroundColor:"#dff0d5",
      display:"customer",
      slotMinutes:60
    },
    {
      type:5,
      name:"Enrollment Conference",
      borderColor:"#7bc143",
      backgroundColor:"#dff0d5",
      display:"customer",
      slotMinutes:30
    },
    {
      type:6,
      name:"Initial Assessment",
      borderColor:"#9acaea",
      backgroundColor:"#ebf5fb",
      display:"student",
      slotMinutes:30
    },
    {
      type:7,
      name:"Progress Assessment",
      borderColor:"#9acaea",
      backgroundColor:"#ebf5fb",
      display:"student",
      slotMinutes:30
    },
    {
      type:8,
      name:"Ongoing Conference",
      borderColor:"#eacc82",
      backgroundColor:"#fcf7db",
      display:"customer",
      slotMinutes:30
    },
    {
      type:9,
      name:"Care Call",
      borderColor:"red",
      backgroundColor:"red",
      display:"customer",
      slotMinutes:30
    },
    {
      type:10,
      name:"Event",
      borderColor:"red",
      backgroundColor:"red",
      display:"customer",
      slotMinutes:30
    }
  ];

var appointmentHours = [
  
  {
    "@odata.etag": "W/\"3895302\"",
    "hub_capacity@OData.Community.Display.V1.FormattedValue": "2",
    "hub_capacity": 2,
    "hub_starttime@OData.Community.Display.V1.FormattedValue": "10:00 AM",
    "hub_starttime": 600,
    "hub_days@OData.Community.Display.V1.FormattedValue": "Monday",
    "hub_days": 1,
    "hub_endtime@OData.Community.Display.V1.FormattedValue": "11:00 AM",
    "hub_endtime": 660,
    "hub_timingsid": "b250a172-669f-e711-80f9-c4346badc680",
    "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "9/22/2017",
    "hub_effectivestartdate": "2017-09-22",
    "hub_effectiveenddate@OData.Community.Display.V1.FormattedValue": "10/31/2017",
    "hub_effectiveenddate": "2017-10-31",
    "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
    "aworkhours_x002e_hub_type": 4,
    "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "30 Mins",
    "aworkhours_x002e_hub_duration": 30
  },
  {
    "@odata.etag": "W/\"3895837\"",
    "hub_capacity@OData.Community.Display.V1.FormattedValue": "3",
    "hub_capacity": 3,
    "hub_starttime@OData.Community.Display.V1.FormattedValue": "8:00 AM",
    "hub_starttime": 480,
    "hub_days@OData.Community.Display.V1.FormattedValue": "Monday",
    "hub_days": 1,
    "hub_endtime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
    "hub_endtime": 540,
    "hub_timingsid": "69f5ca86-02a8-e711-80f9-c4346bad526c",
    "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "10/3/2017",
    "hub_effectivestartdate": "2017-10-03",
    "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
    "aworkhours_x002e_hub_type": 4,
    "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "30 Mins",
    "aworkhours_x002e_hub_duration": 30
  },
  {
    "@odata.etag": "W/\"3895839\"",
    "hub_capacity@OData.Community.Display.V1.FormattedValue": "3",
    "hub_capacity": 3,
    "hub_starttime@OData.Community.Display.V1.FormattedValue": "8:00 AM",
    "hub_starttime": 480,
    "hub_days@OData.Community.Display.V1.FormattedValue": "Tuesday",
    "hub_days": 2,
    "hub_endtime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
    "hub_endtime": 540,
    "hub_timingsid": "c013a214-e6a4-e711-80f9-c4346badc680",
    "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "9/29/2017",
    "hub_effectivestartdate": "2017-09-29",
    "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
    "aworkhours_x002e_hub_type": 4,
    "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "30 Mins",
    "aworkhours_x002e_hub_duration": 30
  },
  {
    "@odata.etag": "W/\"3895840\"",
    "hub_capacity@OData.Community.Display.V1.FormattedValue": "8",
    "hub_capacity": 8,
    "hub_starttime@OData.Community.Display.V1.FormattedValue": "8:00 AM",
    "hub_starttime": 480,
    "hub_days@OData.Community.Display.V1.FormattedValue": "Wednesday",
    "hub_days": 3,
    "hub_endtime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
    "hub_endtime": 540,
    "hub_timingsid": "1fbe3421-e6a4-e711-80f9-c4346badc680",
    "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "9/29/2017",
    "hub_effectivestartdate": "2017-09-29",
    "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
    "aworkhours_x002e_hub_type": 4,
    "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "30 Mins",
    "aworkhours_x002e_hub_duration": 30
  },
  {
    "@odata.etag": "W/\"3895841\"",
    "hub_capacity@OData.Community.Display.V1.FormattedValue": "5",
    "hub_capacity": 5,
    "hub_starttime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
    "hub_starttime": 540,
    "hub_days@OData.Community.Display.V1.FormattedValue": "Thursday",
    "hub_days": 4,
    "hub_endtime@OData.Community.Display.V1.FormattedValue": "10:00 AM",
    "hub_endtime": 600,
    "hub_timingsid": "64204430-e6a4-e711-80f9-c4346badc680",
    "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "9/29/2017",
    "hub_effectivestartdate": "2017-09-29",
    "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
    "aworkhours_x002e_hub_type": 4,
    "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "30 Mins",
    "aworkhours_x002e_hub_duration": 30
  }
];

 
var appointment = [
  {
    "@odata.etag": "W/\"3711439\"",
    "activityid": "bdf15454-7997-e711-80f9-c4346badc680",
    "_hub_staff_value@OData.Community.Display.V1.FormattedValue": "John Smith",
    "_hub_staff_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_staff_Appointment",
    "_hub_staff_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_staff",
    "_hub_staff_value": "5886bcbd-ab77-e711-80f3-c4346bad526c",
    "statecode@OData.Community.Display.V1.FormattedValue": "Scheduled",
    "statecode": 3,
    "hub_endtime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
    "hub_endtime": 540,
    "hub_end_date@OData.Community.Display.V1.FormattedValue": "10/02/2017",
    "hub_end_date": "2017-10-02",
    "_regardingobjectid_value@OData.Community.Display.V1.FormattedValue": "Diana Ken",
    "_regardingobjectid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "regardingobjectid_account_appointment",
    "_regardingobjectid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
    "_regardingobjectid_value": "2e6891c5-e58e-e711-80f7-c4346bacfbbc",
    "_hub_student_value@OData.Community.Display.V1.FormattedValue": "Cathy Finn",
    "_hub_student_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_student_Appointment",
    "_hub_student_value@Microsoft.Dynamics.CRM.lookuplogicalname": "contact",
    "_hub_student_value": "a0b3ae12-e68e-e711-80f7-c4346bacfbbc",
    "hub_start_date@OData.Community.Display.V1.FormattedValue": "10/02/2017",
    "hub_start_date": "2017-10-02",
    "hub_fulldayappointment@OData.Community.Display.V1.FormattedValue": "No",
    "hub_fulldayappointment": false,
    "hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
    "hub_type": 4,
    "_hub_location_value@OData.Community.Display.V1.FormattedValue": "Better Education, Inc.",
    "_hub_location_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_location_Appointment",
    "_hub_location_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_location_value": "46ecf508-e26d-e711-80f2-c4346bacfbbc",
    "hub_appointmentstatus@OData.Community.Display.V1.FormattedValue": "Schedule",
    "hub_appointmentstatus": 0,
    "hub_starttime@OData.Community.Display.V1.FormattedValue": "8:00 AM",
    "hub_starttime": 480,
    "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
    "instancetypecode": 0,
    "hub_outofofficeappointment@OData.Community.Display.V1.FormattedValue": "No",
    "hub_outofofficeappointment": false,
    "aworkhours_x002e_hub_capacity@OData.Community.Display.V1.FormattedValue": "5",
    "aworkhours_x002e_hub_capacity": 5
  },
  {
    "@odata.etag": "W/\"3711475\"",
    "_hub_staff_value@OData.Community.Display.V1.FormattedValue": "Simon",
    "_hub_staff_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_staffid",
    "_hub_staff_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_staff",
    "_hub_staff_value": "7ea9ed74-2f66-e711-80f2-c4346bacfbbc",
    "statecode@OData.Community.Display.V1.FormattedValue": "Scheduled",
    "statecode": 3,
    "hub_endtime@OData.Community.Display.V1.FormattedValue": "11:00 AM",
    "hub_endtime": 600,
    "hub_end_date@OData.Community.Display.V1.FormattedValue": "10/04/2017",
    "hub_end_date": "2017-10-04",
    "_regardingobjectid_value@OData.Community.Display.V1.FormattedValue": "Kiran Angadi",
    "_regardingobjectid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "regardingobjectid_account_appointment",
    "_regardingobjectid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
    "_regardingobjectid_value": "39eace39-9a8c-e711-80f6-c4346bacfbbc",
    "_hub_student_value@OData.Community.Display.V1.FormattedValue": "Vinod K",
    "_hub_student_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_student_Appointment",
    "_hub_student_value@Microsoft.Dynamics.CRM.lookuplogicalname": "contact",
    "_hub_student_value": "b49f3b66-9a8c-e711-80f6-c4346bacfbbc",
    "hub_start_date@OData.Community.Display.V1.FormattedValue": "10/04/2017",
    "hub_start_date": "2017-10-04",
    "hub_fulldayappointment@OData.Community.Display.V1.FormattedValue": "No",
    "hub_fulldayappointment": false,
    "hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
    "hub_type": 4,
    "_hub_location_value@OData.Community.Display.V1.FormattedValue": "Better Education, Inc.",
    "_hub_location_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_location_Appointment",
    "_hub_location_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_location_value": "46ecf508-e26d-e711-80f2-c4346bacfbbc",
    "hub_appointmentstatus@OData.Community.Display.V1.FormattedValue": "Schedule",
    "hub_appointmentstatus": 0,
    "hub_starttime@OData.Community.Display.V1.FormattedValue": "10:00 AM",
    "hub_starttime": 570,
    "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
    "instancetypecode": 0,
    "hub_outofofficeappointment@OData.Community.Display.V1.FormattedValue": "No",
    "hub_outofofficeappointment": false,
    "aworkhours_x002e_hub_capacity@OData.Community.Display.V1.FormattedValue": "5",
    "aworkhours_x002e_hub_capacity": 5
  },
  // {
  //   "@odata.etag": "W/\"3711524\"",
  //   "statecode@OData.Community.Display.V1.FormattedValue": "Scheduled",
  //   "statecode": 3,
  //   "hub_endtime@OData.Community.Display.V1.FormattedValue": "12:00 PM",
  //   "hub_endtime": 720,
  //   "hub_end_date@OData.Community.Display.V1.FormattedValue": "10/02/2017",
  //   "hub_end_date": "2017-10-02",
  //   "_regardingobjectid_value@OData.Community.Display.V1.FormattedValue": "Prasad N",
  //   "_regardingobjectid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "regardingobjectid_account_appointment",
  //   "_regardingobjectid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
  //   "_regardingobjectid_value": "39eace39-9a8c-e711-80f6-c4346bacfbbz",
  //   "_hub_student_value@OData.Community.Display.V1.FormattedValue": "Robin Son",
  //   "_hub_student_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_student_Appointment",
  //   "_hub_student_value@Microsoft.Dynamics.CRM.lookuplogicalname": "contact",
  //   "_hub_student_value": "56ae7707-4491-e711-80f7-c4346bacfbbc",
  //   "hub_start_date@OData.Community.Display.V1.FormattedValue": "10/02/2017",
  //   "hub_start_date": "2017-10-02",
  //   "hub_fulldayappointment@OData.Community.Display.V1.FormattedValue": "No",
  //   "hub_fulldayappointment": false,
  //   "hub_type@OData.Community.Display.V1.FormattedValue": "Practice Test",
  //   "hub_type": 2,
  //   "_hub_location_value@OData.Community.Display.V1.FormattedValue": "Better Education, Inc.",
  //   "_hub_location_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_location_Appointment",
  //   "_hub_location_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
  //   "_hub_location_value": "46ecf508-e26d-e711-80f2-c4346bacfbbc",
  //   "hub_appointmentstatus@OData.Community.Display.V1.FormattedValue": "Schedule",
  //   "hub_appointmentstatus": 0,
  //   "hub_starttime@OData.Community.Display.V1.FormattedValue": "11:00 AM",
  //   "hub_starttime": 660,
  //   "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
  //   "instancetypecode": 0,
  //   "hub_outofofficeappointment@OData.Community.Display.V1.FormattedValue": "No",
  //   "hub_outofofficeappointment": false,
  //   "_hub_pricelist_value@OData.Community.Display.V1.FormattedValue": "Practice Test -Better Edu",
  //   "_hub_pricelist_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_pricelist_Appointment",
  //   "_hub_pricelist_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_pricelist",
  //   "_hub_pricelist_value": "d28554ab-7a97-e711-80f9-c4346badc680",
  //   "_hub_diagnosticserviceid_value@OData.Community.Display.V1.FormattedValue": "Better education Practice Test",
  //   "_hub_diagnosticserviceid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_DiagnosticServiceId_Appointment",
  //   "_hub_diagnosticserviceid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_sch_diagnostic_service",
  //   "_hub_diagnosticserviceid_value": "4e607638-8494-e711-80f8-c4346bad526c",
  //   "aworkhours_x002e_hub_capacity@OData.Community.Display.V1.FormattedValue": "5",
  //   "aworkhours_x002e_hub_capacity": 5
  // },
  // {
  //   "@odata.etag": "W/\"3711815\"",
  //   "activityid": "286e8f68-7c97-e711-80f9-c4346badc680",
  //   "_hub_staff_value@OData.Community.Display.V1.FormattedValue": "Donna",
  //   "_hub_staff_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_staffid",
  //   "_hub_staff_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_staff",
  //   "_hub_staff_value": "7ea9ed74-2f66-e711-80f2-c4346bacfbbc",
  //   "statecode@OData.Community.Display.V1.FormattedValue": "Scheduled",
  //   "statecode": 3,
  //   "hub_endtime@OData.Community.Display.V1.FormattedValue": "10:30 AM",
  //   "hub_endtime": 630,
  //   "hub_end_date@OData.Community.Display.V1.FormattedValue": "10/02/2017",
  //   "hub_end_date": "2017-10-02",
  //   "_regardingobjectid_value@OData.Community.Display.V1.FormattedValue": "Kiran Angadi",
  //   "_regardingobjectid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "regardingobjectid_account_appointment",
  //   "_regardingobjectid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
  //   "_regardingobjectid_value": "39eace39-9a8c-e711-80f6-c4346bacfbbc",
  //   "_hub_student_value@OData.Community.Display.V1.FormattedValue": "Abar",
  //   "_hub_student_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_student_Appointment",
  //   "_hub_student_value@Microsoft.Dynamics.CRM.lookuplogicalname": "contact",
  //   "_hub_student_value": "b49f3b66-9a8c-e711-80f6-c4346bacfaad",
  //   "hub_start_date@OData.Community.Display.V1.FormattedValue": "10/02/2017",
  //   "hub_start_date": "2017-10-02",
  //   "hub_fulldayappointment@OData.Community.Display.V1.FormattedValue": "No",
  //   "hub_fulldayappointment": false,
  //   "hub_type@OData.Community.Display.V1.FormattedValue": "Initial Assessment",
  //   "hub_type": 6,
  //   "_hub_location_value@OData.Community.Display.V1.FormattedValue": "Better Education, Inc.",
  //   "_hub_location_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_location_Appointment",
  //   "_hub_location_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
  //   "_hub_location_value": "46ecf508-e26d-e711-80f2-c4346bacfbbc",
  //   "hub_appointmentstatus@OData.Community.Display.V1.FormattedValue": "Schedule",
  //   "hub_appointmentstatus": 0,
  //   "hub_starttime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
  //   "hub_starttime": 540,
  //   "instancetypecode@OData.Community.Display.V1.FormattedValue": "Not Recurring",
  //   "instancetypecode": 0,
  //   "hub_outofofficeappointment@OData.Community.Display.V1.FormattedValue": "No",
  //   "hub_outofofficeappointment": false,
  //   "_hub_pricelist_value@OData.Community.Display.V1.FormattedValue": "Grade 1-5 Price",
  //   "_hub_pricelist_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_pricelist_Appointment",
  //   "_hub_pricelist_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_pricelist",
  //   "_hub_pricelist_value": "3c3d23b5-0988-e711-80f7-c4346badc680",
  //   "_hub_diagnosticserviceid_value@OData.Community.Display.V1.FormattedValue": "Initial Assessment Appointment",
  //   "_hub_diagnosticserviceid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_DiagnosticServiceId_Appointment",
  //   "_hub_diagnosticserviceid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_sch_diagnostic_service",
  //   "_hub_diagnosticserviceid_value": "c938d984-0988-e711-80f7-c4346badc680",
  //   "aworkhours_x002e_hub_capacity@OData.Community.Display.V1.FormattedValue": "5",
  //   "aworkhours_x002e_hub_capacity": 5
  // },
];





function Data(){

  this.getAppointmentType = function(){
    return appointmentType;
  }

  this.getAppointmentHours = function(startDate,endDate){
    return appointmentHours;
  }

  this.getAppointment = function(startDate,endDate){
    return appointment;
  }

  this.getbusinessClosures = function(startDate,endDate){
    
  }

  this.getSlotDeatil = function(slotStart, slotEnd){

  }


}



