<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <client-only>
        <FullCalendar :options="calendarOptions" ></FullCalendar>
      </client-only>
    </div>
  </div>
</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
export default {
  name: "AvailableSchedule",
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: this.handleDateClick,
        select: this.handleSelect,
        events: [
          {
            title: 'Event Title1',
            start: '2021-02-17T13:13:55.008',
            end: '2021-02-19T13:13:55.008'
          },
          {
            title: 'Event Title2',
            start: '2021-02-17T13:13:55-0400',
            end: '2021-02-18T13:13:55-0400'
          }
        ]
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    },
    selectFT: function(startDate, endDate) {
      console.log('selected ' + startDate + ' to ' + endDate);
    },
    handleSelect(e){
      console.log(e);
    }
  }
}
</script>

<style scoped>

</style>

