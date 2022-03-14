<template>
  <div class="wrapper">
    <h1>Appointments</h1>
    <h2>
      Fill out this information and I'll reach out to you to set up an
      appointment
    </h2>

    <div style="display: flex; justify-content: space-around">
      <div style="display: block; width: 500px">
        <p>How many people do you want in this session?</p>
        <div style="display: flex; justify-content: space-around">
          <input
            type="button"
            class="amountOfPeople"
            data="unselected"
            @click="SelectOption(this)"
            value="Personal"
            id="personalSession"
          />
          <input
            type="button"
            class="amountOfPeople"
            data="unselected"
            @click="SelectOption(this)"
            value="Couple"
            id="coupleSession"
          />
          <input
            type="button"
            class="amountOfPeople"
            data="unselected"
            @click="SelectOption(this)"
            value="Group"
            id="groupSession"
          />
        </div>

        <p>What time of day works best for you?</p>
        <div style="display: flex; justify-content: space-around">
          <input
            type="button"
            class="timeOfDay"
            data="unselected"
            @click="SelectOption(this)"
            value="Morning"
            id="morningSession"
          />
          <input
            type="button"
            class="timeOfDay"
            data="unselected"
            @click="SelectOption(this)"
            value="Afternoon"
            id="afternoonSession"
          />
          <input
            type="button"
            class="timeOfDay"
            data="unselected"
            @click="SelectOption(this)"
            value="Evening"
            id="eveningSession"
          />
        </div>
        <p>What type of session would you like?</p>
        <div style="display: flex; justify-content: space-around">
          <input
            type="button"
            class="sessionType"
            data="unselected"
            @click="SelectOption(this)"
            value="SeniorPictures"
            id="senior"
          />
          <input
            type="button"
            class="sessionType"
            data="unselected"
            @click="SelectOption(this)"
            value="Engagement"
            id="engagement"
          />
          <input
            type="button"
            class="sessionType"
            data="unselected"
            @click="SelectOption(this)"
            value="Portrait"
            id="portrait"
          />
        </div>
        <br />
        Please insert your email: <br /><input
          id="email"
          type="text"
          name="email"
          value="youremail@example.com"
          style="margin-left: 5px; margin-bottom: 10px"
        />
        <br />
        Please insert your phone number: <br /><input
          id="phone"
          type="text"
          name="phone"
          value="(123)-456-7890"
          style="margin-left: 5px; margin-bottom: 10px"
        />
        <br />
        <label for="contactMethod">Choose a preffered contact method</label>
        <select id="contactMethod">
          <option value="">--Please choose an option--</option>
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
          <option value="Both">Both/No Preference</option>
        </select>
        <br />

        <input
          type="button"
          class="submission"
          @click="logApt()"
          value="Submit"
          style="
            background-color: Blue;
            color: white;
            height: 50px;
            width: 100px;
          "
        />
      </div>

      <div style="width: 600px; margin-right: 20%">
        <div class="calendar">
          <div class="calendar__picture">
            <h2>18, Sunday</h2>
            <h3>November</h3>
          </div>
          <div class="calendar__date">
            <div class="calendar__day">M</div>
            <div class="calendar__day">T</div>
            <div class="calendar__day">W</div>
            <div class="calendar__day">T</div>
            <div class="calendar__day">F</div>
            <div class="calendar__day">S</div>
            <div class="calendar__day">S</div>
            <div class="calendar__number"></div>
            <div class="calendar__number"></div>
            <div class="calendar__number"></div>
            <div class="calendar__number">1</div>
            <div class="calendar__number">2</div>
            <div class="calendar__number">3</div>
            <div class="calendar__number">4</div>
            <div class="calendar__number">5</div>
            <div class="calendar__number">6</div>
            <div class="calendar__number">7</div>
            <div class="calendar__number">8</div>
            <div class="calendar__number">9</div>
            <div class="calendar__number">10</div>
            <div class="calendar__number">11</div>
            <div class="calendar__number">12</div>
            <div class="calendar__number">13</div>
            <div class="calendar__number">14</div>
            <div class="calendar__number">15</div>
            <div class="calendar__number">16</div>
            <div class="calendar__number">17</div>
            <div class="calendar__number calendar__number--current">18</div>
            <div class="calendar__number">19</div>
            <div class="calendar__number">20</div>
            <div class="calendar__number">21</div>
            <div class="calendar__number">22</div>
            <div class="calendar__number">23</div>
            <div class="calendar__number">24</div>
            <div class="calendar__number">25</div>
            <div class="calendar__number">26</div>
            <div class="calendar__number">27</div>
            <div class="calendar__number">28</div>
            <div class="calendar__number">29</div>
            <div class="calendar__number">30</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentsView",
  methods: {
    SelectOption(buttonSelected) {
      if (buttonSelected.data == "unselected") {
        buttonSelected.style.backgroundColor = "white";
        buttonSelected.data = "unselected";
      } else {
        buttonSelected.style.backgroundColor = "DarkGrey";
        buttonSelected.data = "selected";
      }
    },

    logApt() {
      var numberOfPeople;
      if (document.getElementById("personalSession").data === "selected") {
        this.numberOfPeople = document.getElementById("personalSession").value;
      } else if (document.getElementById("coupleSession").data === "selected") {
        numberOfPeople = document.getElementById("coupleSession").value;
      } else if (document.getElementById("groupSession").data === "selected") {
        numberOfPeople = document.getElementById("groupSession").value;
      }

      var shootTime;
      if (document.getElementById("morningSession").data === "selected") {
        shootTime = document.getElementById("morningSession").value;
      } else if (
        document.getElementById("afternoonSession").data === "selected"
      ) {
        shootTime = document.getElementById("afternoonSession").value;
      } else if (
        document.getElementById("eveningSession").data === "selected"
      ) {
        shootTime = document.getElementById("eveningSession").value;
      }

      var shootType;
      if (document.getElementById("senior").data === "selected") {
        shootType = document.getElementById("senior").value;
      } else if (document.getElementById("engagement").data === "selected") {
        shootType = document.getElementById("engagement").value;
      } else if (document.getElementById("portrait").data === "selected") {
        shootType = document.getElementById("portrait").value;
      }

      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var preference = document.getElementById("contactMethod").value;
      var apt =
        numberOfPeople +
        " " +
        shootTime +
        " " +
        shootType +
        " " +
        email +
        " " +
        phone +
        " " +
        preference;
      console.log(apt);
    },
  },
};
</script>

<style>
body {
  background-color: DarkGrey;
}

.calendar {
  margin-left: 60%;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  width: 300px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 5px 50px rgba(#000, 0.5);
  border-radius: 8px;
  overflow: hidden;
}

.calendar__picture {
  position: relative;
  height: 200px;
  padding: 20px;
  color: #fff;
  background: #262626
    url("https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=183f2924ba5a8429441804609b2d4f61")
    no-repeat center / cover;
  text-shadow: 0 2px 2px rgba(#000, 0.2);
  box-sizing: border-box;

  &::before {
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    background: linear-gradient(to top, rgba(#000, 0.25), rgba(#000, 0.1));
  }

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
    font-weight: 500;
  }
}

.calendar__date {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
  grid-gap: 10px;
  box-sizing: border-box;
}

.calendar__day {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  font-weight: 600;
  color: #262626;

  &:nth-child(7) {
    color: #ff685d;
  }
}

.calendar__number {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  color: #262626;

  &:nth-child(7n) {
    color: #ff685d;
    font-weight: 700;
  }

  &--current,
  &:hover {
    background-color: #009688;
    color: #fff !important;
    font-weight: 700;
    cursor: pointer;
  }
}
ul {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
.sessionType {
  background-color: white;
  width: 100px;
  height: 50px;
}
.sessionType:hover {
  background-color: lightGrey;
}
.timeOfDay {
  background-color: white;
  width: 100px;
  height: 50px;
}
.timeOfDay:hover {
  background-color: lightGrey;
}
.amountOfPeople {
  background-color: white;
  width: 100px;
  height: 50px;
}
.amountOfPeople:hover {
  background-color: lightGrey;
}
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
</style>
