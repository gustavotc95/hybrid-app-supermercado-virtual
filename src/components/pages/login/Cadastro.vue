<template>
    <div class="cadastro">
        <div class="container">
            <div class="botoes-sociais">
                <div class="btn btn-login-social btn-face"><span class="icon facebook-icon"></span> <span>Cadastrar com o Facebook</span></div>
                <div class="btn btn-login-social btn-google"><span class="icon google-icon"></span> <span>Cadastrar com o Google</span></div>
            </div>
            <div class="ou"><span>ou</span></div>
            <form class="needs-validation">
                <div class="row">
                    <div class="col-md-12 mb-3">
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
                    <label for="password">Senha</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">*</span>
                        </div>
                        <input type="password" class="form-control" id="password" placeholder="******" required="">
                        <div class="invalid-feedback" style="width: 100%;">
                            A senha é obrigatória.
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address">Endereço</label>
                    <input type="text" class="form-control" id="address" placeholder="Rua Brasil, 123" required="">
                    <div class="invalid-feedback">
                        Por favor insira seu endereço de entrega.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address2">Bairro</label>
                    <input type="text" class="form-control" id="address2" placeholder="Centro" required="">
                    <div class="invalid-feedback">
                        Por favor insira seu bairro.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="zip">Cep</label>
                    <input type="text" class="form-control" id="zip" placeholder="35570-000" required="">
                    <div class="invalid-feedback">
                        Digit seu CEP.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="cel">Celular</label>
                    <input type="text" class="form-control" id="cel" placeholder="(00)9.0000-0000" required="">
                    <div class="invalid-feedback">
                        Digite seu Celular.
                    </div>
                </div>

                <hr class="mb-4">
                <button class="btn btn-primary btn-lg btn-block" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
