<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">
                    <i class="fas fa-compress-arrows-alt"></i>
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Risks {{name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data(){
            return {
                name: process.env.VUE_BASE_URL
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
    }

    .navbar .container-fluid {
        margin: 0 20px;
    }

    .container {
        margin-top: 2rem;
    }
</style>
