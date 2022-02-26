<template>
    <button class="k-button"
      :class="classes"
    >
        <slot />
    </button>
</template>

<script>
import { computed } from '@vue/runtime-core'
    export default {
        props:{
            theme:{
                type:String,
                default:"button"
            },
            size:{
                type:String,
                default:"normal"
            },
            level:{
                type:String,
                default:"main"
            },
        },
        setup(props){
            const {theme,size,level} =props
            const classes=computed(()=>{
                return {
                    [`k-theme-${theme}`]:theme,
                    [`k-size-${size}`]:size,
                    [`k-level-${level}`]:level,
                };
            })
            return {classes}
        }
         
    }
</script>

<style lang="scss" >
$h:32px;
$border-color:#d9d9d9;
$color:#333;
$blue:#40a9ff;
$radius:4px;
.k-button{
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color:$color;
    border:1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black,0.95);
    &:hover{
             animation: button-hover 0.5s linear forwards;
            
    }
    @keyframes button-hover {
        from {
        transform: translateY(0);
        }
        to {
        transform: translateY(-3px);
        }
    }
    
    & + & {
        margin-left: 8px;
    }
    
    &:focus{
        color:$blue;
        border-color: $blue;
       
    }
    &:focus{
         outline: none;
    }
        
    &::-moz-focus-inner{
        border:0;
    }
    &.k-theme-link{
        border-color: transparent;
        box-shadow: none;
        color: $blue;
        &:hover,&:focus{
            color: lighten($blue,10%);
        }
    }

    &.k-theme-text{
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,&:focus{
            background: darken(white,5%);
        }
    }
    &.k-theme-button{
        &.k-size-big{
            font-size: 24px;
            height: 48px;
            padding: 0 16px;
        }
        &.k-size-small{
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }
    }
    &.k-level-primary{
            background:#1976d2;
            color:#fff;
            border:none;
        }
    &.k-level-warning{
            background:#ffc107;
            color:#fff;
            border:none;
        }
    &.k-level-danger{
            background:#ff4f57;
            color:#fff;
            border:none;
        }    

}

</style>