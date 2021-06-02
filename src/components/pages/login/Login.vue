<template>
    <div class="login-form">
        <form class="form-signin">
            <img class="mb-4" src="../../../assets/img/logo-supermercado.png" alt="" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Acesse sua conta</h1>
            <label for="inputEmail" class="sr-only">Email</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Senha</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required="">
            <router-link to="/recuperacao-senha" class="link-senha">Esqueci minha senha</router-link>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
            <router-link to="/cadastro" class="btn btn-lg btn-outline-primary btn-block">Fazer cadastro</router-link>
        </form>
        <div class="ou"><span>ou</span></div>
        <div class="botoes-sociais">
            <div class="btn btn-login-social btn-face"><span class="icon facebook-icon"></span> <span>Entrar com o Facebook</span></div>
            <div class="btn btn-login-social btn-google"><span class="icon google-icon"></span> <span>Entrar com o Google</span></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
