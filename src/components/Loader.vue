<template>
    <div class="loading">
        <span></span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.loading {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
}

@keyframes circle-loading {
    to {
        transform: rotateZ(360deg)
    }
}

span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: var(--color-bg-primary);
    animation: circle-loading 1200ms ease infinite;
}
</style>