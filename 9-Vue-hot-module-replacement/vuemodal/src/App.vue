<template>
  <div id="app">

    <transition name="fade">
      <div class="modal-overlay" v-if="showModal">

      </div>
    </transition>
    <transition name="slide">
      <div class="modal" v-if="showModal">
        <h1>Titulo</h1>
        <p>Contenido del modal</p>
        <button @click="showModal = false">Cerar el modal</button>
      </div>
    </transition>
    <button @click="showModal = true">Abrir el Modal</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 15px;
    display: block;
    padding: 15px 20px;
    background: red;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 3px 3px rgba( 0, 0, 0, 0.4);
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
  }


  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 3px 3px rgba(0,0,0,0.4);
    z-index: 120;
  }

  /* transitions */
  .fade-enter, 
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, 
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter-t,
  .fade-leave {
    opacity: 1;
  }

/* slide */
  .slide-enter,
.slide-leave-to {
  transform: translate(500%, 500%);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .5s;
}

.slide-enter-to,
.slide-leave {
  transform: translate(-50%, -50%);
}

</style>
