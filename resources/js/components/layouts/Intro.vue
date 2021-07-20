<template>
    <div class="intro" id="intro">
        <div class="intro-size">


            <div class="carousel">
                <div class="carousel-inner">
                    <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
                    <div class="carousel-item">
                        <div class="assesment as">
                            <a href="/immigrate#Express-Entry"> <h2><i class="text-head"> Express Entry </i></h2> </a>
                            <p>Find out what it takes to be eligible for Canadian immigration and begin your clear path to Canada.</p>
                            <a style="padding: 2px" href="https://docs.google.com/forms/d/e/1FAIpQLSdbyqghvMVhfI74pOVvhEAi6JXPJJuph5NdBq6VQFdUh9wSRg/viewform">Get your free assesment</a> <br> <br>
                            Express Entry is Canada's main pathway for skilled workers. Canada aims to welcome 110,000 new immigrants under Express Entry each year. <br>
                        </div>
                        <img class="ass" src="/images/landingPage1.jpg">
                    </div>
                    <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
                    <div class="carousel-item">
                        <div class="assesment">
                            <h2> Don’t be a victim of frauds! Many firms only mention names of lawyers or RCICs, but they don’t retain their service! If you are not signing a retainer agreement directly with an RCIC, you are being cheated!!</h2>
                        </div>
                        <img class="ass" src="/images/landingPage2.jpg">
                    </div>
                    <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
                    <div class="carousel-item">
                        <h2 class="assesment" style="color:#ffffff"><i> What are your ACTUAL ways of success? Which programs are best fit for you? It costs little to consult but can save you big time in long run! </i></h2> 
                        <img src="/images/landingPage3.jpg">
                    </div>
                    <input class="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="">
                    <div class="carousel-item">
                        <h2 class="assesment" style="color:#000000"><i> Claim a referral bonus of $150 for every friends that retain our service! </i></h2>
                        <img src="/images/landingPage4.png">
                    </div>
                    <label for="carousel-4" class="carousel-control prev control-1">‹</label>
                    <label for="carousel-2" class="carousel-control next control-1">›</label>
                    <label for="carousel-1" class="carousel-control prev control-2">‹</label>
                    <label for="carousel-3" class="carousel-control next control-2">›</label>
                    <label for="carousel-2" class="carousel-control prev control-3">‹</label>
                    <label for="carousel-4" class="carousel-control next control-3">›</label>
                    <label for="carousel-3" class="carousel-control next control-4">‹</label>
                    <label for="carousel-1" class="carousel-control next control-4">›</label>
                    <ol class="carousel-indicators">
                        <li>
                            <label for="carousel-1" class="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label for="carousel-2" class="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label for="carousel-3" class="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label for="carousel-4" class="carousel-bullet">•</label>
                        </li>
                    </ol>
                </div>
            </div>
            



        </div>

    </div>
</template>


<script>

export default {
    name:'Intro',    
}
</script>

<style>
.intro{
    overflow: hidden;
}
.intro-size{
    min-width: fit-content;
    max-height: 50%;
}



html, body {
    margin: 0px;
    padding: 0px;
   }

.carousel {
    position: relative;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
    margin-top: 0.5px;
}

.carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

.carousel-item img {
    display: block;
    height: auto;
    max-width: 100%;
}

.carousel-control {
    background: rgba(0, 0, 0, 0.28);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: none;
    font-size: 40px;
    height: 40px;
    line-height: 35px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    width: 40px;
    z-index: 10;
}

.carousel-control.prev {
    left: 2%;
}

.carousel-control.next {
    right: 2%;
}

.carousel-control:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #aaaaaa;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3,
#carousel-4:checked ~ .control-4 {
    display: block;
}

.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

.carousel-indicators li {
    display: inline-block;
    margin: 0 5px;
}

.carousel-bullet {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 35px;
}

.carousel-bullet:hover {
    color: #aaaaaa;
}

#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet,
#carousel-4:checked ~ .control-4 ~ .carousel-indicators li:nth-child(4) .carousel-bullet {
    color: #428bca;
}

#title {
    width: 100%;
    position: absolute;
    padding: 0px;
    margin: 0px auto;
    text-align: center;
    font-size: 27px;
    color: rgba(255, 255, 255, 1);
    font-family: 'Open Sans', sans-serif;
    z-index: 9999;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);
}





</style>