<template>
  <div>
    <div class="wrapper">
      <div class="heading">
        <h1>Reviews</h1>
        <h2>feel free to leave a review below!</h2>
      </div>

      <div class="review-list">
        <p class="reviewL">
          I have never looked so good. He knows some great spots and has the
          perfect equipment to get the best lighting<br />Brittin S.
          5&#11088;'s'
        </p>
        <p class="reviewR">
          His photography helps me see life through a refreshing lens<br />Jesse
          M. 5&#11088;'s'
        </p>
        <p class="reviewL">
          Dante is a wonderful man and truly a professional in his field. He was
          instantly able to put my family at ease, and capture some captivating
          photographs. I will treasure them forever. I simply cannot recommend
          him enough!<br />Chelsea H. 5&#11088;'s'
        </p>
        <p class="reviewR">
          Dante was the best photographer I have ever hired. On time. Followed
          through on everything he said he would do. Would highly recommend him
          to family, friends and business associates<br />Jen B. 4&#11088;'s'
        </p>
        <p class="reviewL">
          Great photographer to work with. Dante was energetic, engaging, and a
          lot of fun! We love our wedding pictures!<br />Stephanie M.
          4&#11088;'s'
        </p>
        <p class="reviewR">
          Dante is super creative and is genuinely a nice guy. Great to work
          with!<br />Alexa J. 4&#11088;'s'
        </p>
        <p class="reviewL">
          Dante is an extremely personable individual, with an artistic eye, he
          will make your experience memorable!!<br />Kelsie T. 5&#11088;'s'
        </p>
        <p class="userReview" id="userReview"></p>
      </div>
    </div>

    <div
      class="userSubmission"
      style="display: flex; flex-direction: column; align-items: center"
    >
      <h2>Leave a Review Below!</h2>
      <form class="review">
        Name:<input
          id="name"
          type="text"
          name="name"
          value="Steve R."
          style="margin-left: 5px; margin-bottom: 10px"
        />
        <br />
        <br />
        <textarea
          id="description"
          rows="10"
          cols="50"
          name="description"
          spellcheck="true"
        >
Type your Review here
         </textarea
        >
      </form>
      <br />
      <p>
        <input
          type="button"
          class="submission"
          @click="getReview()"
          value="Submit"
          style="
            background-color: Blue;
            color: white;
            height: 50px;
            width: 100px;
          "
        />
        <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsView",
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    getReview() {
      console.log("Start");
      let product = document.getElementById("userReview");
      var userName = document.getElementById("name").value;
      console.log(userName);
      var description = document.getElementById("description").value;
      console.log(description);
      //var stars = document.getElementById("star").value;
      //console.log(stars)
      let review = document.createTextNode(description + "     -" + userName);
      console.log(review);
      product.appendChild(review);
    },
  },
};
</script>

<style>
body {
  background-color: DarkGrey;
}
.reviewR {
  width: 60%;
  border: 1px solid White;
  background-color: white;
  margin-left: 40%;
  margin-right: 5%;
}
.reviewL {
  width: 60%;
  border: 1px solid White;
  background-color: white;
  margin-left: 5%;
}
.userReview {
  width: 60%;
  !/border: 1px solid White;
  background-color: white;
  margin-left: 40%;
  margin-right: 5%;
}
.review-list {
  display: flex;

  font-size: 20px;
  padding: 30px;
  flex-wrap: wrap;
}
.userSubmission {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
