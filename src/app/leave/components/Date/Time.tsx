import FullCalendar from '@fullcalendar/react';
import React, { useEffect, useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { MissingData } from './MockData';
import { Calendar } from '@fullcalendar/core';

function renderEventContent(eventInfo:any) {
  console.log("EVENT INFO",eventInfo);
  
  return (
    <div>
       {(() => {
        switch (eventInfo?.event?.title) {
          case "Approval Complete":
            return <div>
              <p className="border-2 border-[#2D9B6D] rounded-md py-1 px-2 text-xs text-[#2D9B6D] font-medium mb-1 bg-[#D2EEE1]">{eventInfo?.event?.title}</p>
              <p className="text-xs font-normal text-[#C62D2C] px-1">{eventInfo?.event?.extendedProps?.type}</p>
            </div>
          case "Work in Progress":
            return <div>
            <p className="border-2 border-[#CA6218] rounded-md py-1 px-2 text-xs text-[#CA6218] font-medium mb-1 bg-[#FFE1C6]">{eventInfo?.event?.title}</p>
            <p className="text-xs font-normal text-[#C62D2C] px-1">{eventInfo?.event?.extendedProps?.type}</p>
          </div>
          case "Pending Approval":
            return <div>
            <p className="border-2 border-[#CA6218] rounded-md py-1 px-2 text-xs text-[#CA6218] font-medium mb-1 bg-[#FFE1C6]">{eventInfo?.event?.title}</p>
            <p className="text-xs font-normal text-[#C62D2C] px-1">{eventInfo?.event?.extendedProps?.type}</p>
          </div>
          default:
            return null
        }
      })()}
        {/* <p className="border-2 border-[#CA6218] rounded-md py-1 px-2 text-xs text-[#CA6218] font-medium mb-1 bg-[#FFE1C6]">{eventInfo?.event?.title}</p>
        <p className="text-sm font-semibold text-[#333333] px-2">{eventInfo?.event?.extendedProps?.type}</p> */}
    </div>
  )
}

export default function Time() {
  const [events, setEvents] = useState<Array<any>>([]);

  useEffect(() => {
    MissingData.map((details)=>{
      console.log(details);
      
      
      let startDate: Date
      let endDate: Date
      if(details?.CHECK_IN_TIME !==null && details?.CHECK_OUT_TIME === null){
        startDate = new Date(details?.CHECK_IN_TIME?.split(" ")[0]);
        endDate = new Date(details?.CHECK_IN_TIME?.split(" ")[0]);
      }else if(details?.CHECK_OUT_TIME !==null && details?.CHECK_IN_TIME === null){
        startDate = new Date(details?.CHECK_OUT_TIME?.split(" ")[0]);
        endDate = new Date(details?.CHECK_OUT_TIME?.split(" ")[0]);
      }else{
        startDate = new Date(details?.CHECK_IN_TIME?.split(" ")[0]);
        endDate = new Date(details?.CHECK_OUT_TIME?.split(" ")[0]);
      }
      setEvents(current=>[
        ...current,{
          id: details?.TRANSACTION_ID,
          title: details?.STATUS_MEANING,
          start: startDate,
          end: endDate,
          type: details?.REQUEST_TYPE,
        }
      ]);
    })
  }, [])

const show = (event:any) =>{
  console.log(event);
  
  return(
    <div className="modal fade" id="schedule-edit">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Edit Your Schedule</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
          
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label>Schedule Name:</label>
                        <input type="text" className="form-control"/>
                    </div>
                </form>
            </div>
         
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success">Save Your Schedule</button>
            </div>
        </div>
    </div>
</div>
  )
}

console.log(events);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        views={{
          month:{
            titleFormat:{
              month:'long',
              year:'2-digit'
            }
          }
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={events}
        eventClick={
          function(arg) {
            $("#myModal").modal("show");
            $(".modal-body").html("");
            $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
          }
        }
        initialEvents={events} // alternatively, use the `events` setting to fetch from a feed
        eventContent={renderEventContent} // custom render function
      />
      <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
              
                <div className="modal-header">
                  <h4 className="modal-title align-center">Date is Below</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div className="modal-body text-center">
                  
                </div>
              
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}