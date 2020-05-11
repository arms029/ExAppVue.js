<template>
<div>
    <h1 class="text-primary mt-3">{{ titulo }}</h1>
    <div class="form-group d-flex justify-content-center">
        <img src="/static/pitagoras.jpg" width="400px" alt="Fuzzy Cardigan"
            class="img-thumbnail img-responsive mt-3"  >
    </div>
</div>
</template>

<script>
export default {
    props:['titulo']
}
</script>

<style lang="scss">
</style>