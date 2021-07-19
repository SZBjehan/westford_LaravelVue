<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <button class="popup-close"> x</button>
        </div>    
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0,0,9,0.2);
    
    display: flex;
    justify-content: center;
    align-items: center;

    .popup-inner{
        color: #000009;
        background-color: #ffffff;
    }
}

</style>