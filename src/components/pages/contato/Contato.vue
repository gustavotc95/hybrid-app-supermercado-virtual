<template>
  <div class="form-contato container">
        <form class="needs-validation">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="name">Nome completo</label>
                    <input type="text" class="form-control" id="name" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                        É necessário um nome válido.
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="username">Email</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="email" class="form-control" id="email" placeholder="nome@email.com" required="">
                    <div class="invalid-feedback" style="width: 100%;">
                        Digite um endereço de e-mail válido.
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="cel">Celular</label>
                <input type="text" class="form-control" id="cel" placeholder="(00)9.0000-0000" required="">
                <div class="invalid-feedback">
                    Digite seu Celular.
                </div>
            </div>

            <div class="mb-3">
                <label for="mensagemContato">Mensagem</label>
                <textarea class="form-control" id="mensagemContato" rows="3"></textarea>
            </div>

            <button class="btn btn-primary btn-lg btn-block mt-3" type="submit">Enviar</button>
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
