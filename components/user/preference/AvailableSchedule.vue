<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <client-only>
        <FullCalendar :options="calendarOptions"></FullCalendar>
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
        events: [
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2021-01-22' }
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
    }
  }
}
</script>

<style scoped>

</style>

