<template>
  <div class="notificacoes-content">
    <div class="notificacao container">
      <h1>{{ notification.title }}</h1>

      <div class="notificacao-body">
        <div class="texto" v-html="notification.message"></div>
        <div class="link" v-if="notification.link">
          <a :href="notification.link" class="btn btn-primary btn-block">Acessar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['notification']
}
</script>
