<template>
    <div class="overflow-menu">
        <div class="drop">
            <span class="icon overflow-menu-icon" @click="drop($event)"></span>
        </div>
        <div class="dd-menu" @click="stopProp($event)">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    drop: function (e) {
      let dd = document.querySelectorAll('.dd-menu')
      dd.forEach(element => {
        element.classList.remove('active')
      })

      let parent = e.target.parentElement.parentElement

      if (parent.classList.contains('list-active')) {
        let parents = document.querySelectorAll('.overflow-menu')
        parents.forEach(element => {
          element.classList.remove('list-active')
        })
      } else {
        let parents = document.querySelectorAll('.overflow-menu')
        parents.forEach(element => {
          element.classList.remove('list-active')
        })
        parent.classList.add('list-active')
      }

      let el = document.querySelector('.list-active .dd-menu')

      el.classList.toggle('active')
      // $('.dd-menu').toggleClass("active");
    },

    stopProp: function (e) {
      e.stopPropagation()
    }
  },

  mounted () {
    document.querySelector('html').addEventListener('click', function () {
      if (!event.target.classList.contains('overflow-menu-icon')) {
        let dd = document.querySelectorAll('.dd-menu')
        dd.forEach(element => {
          element.classList.remove('active')
        })
      }
    })
  }
}
</script>
