<template>
  <div class="login-form recuperacao-senha">
        <form class="form-signin">
            <img class="mb-4" src="../../../assets/img/logo-supermercado.png" alt="" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Esqueceu sua senha?</h1>
            <span class="sub-title">Não se preocupe! Insira o seu e-mail de cadastro e enviaremos instruções para você.</span>
            <label for="inputEmail" class="sr-only">Email</label>
            <input type="email" id="inputEmailRecuperacao" class="form-control" placeholder="Email" required="" autofocus="">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Enviar email</button>
            <button class="btn btn-lg btn-outline-primary btn-block" @click="$router.go(-1)">Voltar</button>
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
