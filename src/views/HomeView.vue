<template>
  <div>
    <div class="wrapper">
      <h1 style="text-align: center">
        Welcome to Dante's Photography Website!
      </h1>

      <div
        style="
          display: flex;
          justify-content: space-around;
          margin-bottom: 10px;
        "
      >
        <img
          src="https://live.staticflickr.com/6132/5945319326_94faf6292e_b.jpg"
          style="width: 20%"
        />
        <div style="display: block; justify-content: center">
          <h1>Hey! I'm Dante!</h1>
          <p style="font-size: 25px">
            I'm a photographer and I love what I do! I have been taking pictures
            professionally for many years. I've had a lot of fun getting to know
            different people and helping them to document a chapter of their
            lives! I hope to be able to meet you at some point as well!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
* {
  box-sizing: border-box;
}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.mySlides {
  display: none;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
body {
  background-color: DarkGrey;
}
.Slide {
  height: 500px;
}
</style>
