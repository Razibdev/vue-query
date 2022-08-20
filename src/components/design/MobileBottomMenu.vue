<template>
<div class="navigation">
  <ul class="listWrap">
    <li class="list active">
      <a href="javascript:void(0);">
        <i class="icon">
          <i class="fa fa-home" aria-hidden="true"></i>
        </i>
        <span class="text">Home</span>
      </a>
    </li>
    <li class="list">
      <a href="javascript:void(0);">
        <i class="icon">
         <i class="fa fa-info-circle" aria-hidden="true"></i>
        </i>
        <span class="text">About</span>
      </a>
    </li>
    <li class="list">
      <a href="javascript:void(0);">
        <i class="icon">
         <i class="fa fa-user" aria-hidden="true"></i>
        </i>
        <span class="text">Profile</span>
      </a>
    </li>
    <li class="list">
      <a href="javascript:void(0);">
        <i class="icon">
         <i class="fa fa-cog" aria-hidden="true"></i>
        </i>
        <span class="text">Settings</span>
      </a>
    </li>

    <li class="list">
      <a href="javascript:void(0);">
        <i class="icon">
       <i class="fa fa-phone" aria-hidden="true"></i>
        </i>
        <span class="text">Settings</span>
      </a>
    </li>


    <li class="indicator"></li>
  </ul>
</div>
</template>

<script>
 export default{
    // methods:{
    //      activateLink(e) {
    //         console.log(e)
    //      const listItem = document.querySelectorAll('.list');
    //     listItem.forEach( item => {
    //         item.classList.remove('active');
    //     });
    //     e.classList.add('active');
    //     }
    // },

    mounted(){
        const listItem = document.querySelectorAll('.list');

        listItem.forEach( select_item => {
        select_item.addEventListener('click', function(){
                listItem.forEach( item => {
                    item.classList.remove('active');
                });
                select_item.classList.add('active');
        });
        });
    }
 }
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css');
</style>
<style lang="scss" >


html {
  font-size: 62.5%;
  
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  -webkit-tap-highlight-color: transparent;
}

:root {
  --bg-default: #222327;
  --primary-white: #ffffff;
  --primary-red: #ff3c41;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--bg-default);
}

.navigation {
  width: 360px;
  height: 70px;
  background: var(--primary-white);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0 20px;
  .listWrap {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    li {
      width: 70px;
      height: 70px;
      position: relative;
      z-index: 1;
       color:#222327 !important;
      a {
        text-decoration: none;
        color:#222327 !important;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        font-weight: 500;
        width: 100%;
        &:hover {
          text-decoration: none;
        }
        .icon {
          position: relative;
          display: block;
          line-height: 75px;
          text-align: center;
          transition: 0.5s;
          color: var(--bg-default);
          ion-icon {
            font-size: 2.2rem;
          }
        }
        .text {
          position: absolute;
          color: var(--bg-default);
          font-weight: 400;
          letter-spacing: 0.05em;
          transition: 0.5s;
          transform: translateY(20px);
          opacity: 0;
          z-index: 1;
        }
      }
      &:active, &.active {
        a {
          .icon {
            color: var(--primary-white);
            transform: translateY(-32px);
          }
          .text {
            opacity: 1;
            transform: translateY(10px);
          }
        }
      }
      &.indicator {
        position: absolute;
        width: 70px;
        height: 70px;
        top: -50%;
        border-radius: 50%;
        border: 6px solid var(--bg-default);
        background: var(--primary-red);
        transition: 0.3s;
        z-index: 0;
        &:before, &:after {
          content: '';
          position: absolute;
          top: 50%;
          width: 20px;
          height: 20px;
          background: blue;
          background: transparent;
        }
        &:after {
          right: -22px;
          box-shadow: -1px -10px 0 0 var(--bg-default);
          border-top-left-radius: 20px;
        }
        &:before {
          left: -22px;
          box-shadow: 1px -10px 0 0 var(--bg-default);
          border-top-right-radius: 20px;
        }
      }
      &:nth-child(1).active ~ .indicator {
        transform: translateX(calc(70px * 0));
      }
      &:nth-child(2).active ~ .indicator {
        transform: translateX(calc(49px * 1 + (6px * 2)));
      }
      &:nth-child(3).active ~ .indicator {
        transform: translateX(calc(49px * 2 + (6px * 4) + 1px));
      }
      &:nth-child(4).active ~ .indicator {
        transform: translateX(calc(50px * 3 + (6px * 6) + 2px));
      }

       &:nth-child(5).active ~ .indicator {
        transform: translateX(calc(54px * 4 + (6px * 6) + 2px));
      }

      
    }
  }
}
</style>