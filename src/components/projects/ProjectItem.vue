<template>
  <div class="proj-item-flex">
    <img class="proj-img" :src="imageSrc">
    <div class="proj-description">
      <h4>{{ projTitle }}</h4>
      <p>{{ projDesc }}</p>
      <div class="proj-controls">
        <base-button :href="demoLink" :target="hasLink ? '_blank' : '_self'">
          <span>
            <iconify-icon :icon="icon" :width="iconWidth"></iconify-icon>
          </span>
          {{ control }}
        </base-button>
        <base-button :href="githubLink" target="_blank" mode="outline">
          <span>
            <iconify-icon icon="mdi:github" width=20></iconify-icon>
          </span>
          Code
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default{
  props: {
    imageSrc: { type: String },
    projTitle: { type: String },
    projDesc: { type: String },
    demoLink: { type: String },
    githubLink: { type: String },
    icon: { type: String },
    iconWidth: { type: Number },
    control: { type: String },
    externalLink: { type: Boolean },
  },
  setup(props){
    const imageSrc = ref(props.imageSrc)
    const projTitle = ref(props.projTitle)
    const projDesc = ref(props.projDesc)
    const demoLink = ref(props.demoLink)
    const githubLink = ref(props.githubLink)
    const icon = ref(props.icon)
    const iconWidth = ref(props.iconWidth)
    const control = ref(props.control)
    const hasLink = ref(props.externalLink)

    const link = computed(() => {
      if (hasLink.value = true){
        return link
      }
      else return false
    })

    return{
      imageSrc, projTitle, projDesc, demoLink, githubLink, icon, iconWidth, control, link, hasLink
    }
  }
}
</script>

<style scoped> 
.proj-img{
  box-shadow: 10px 10px lightblue;
  margin: 24px;
  width: 420px;
  max-width: 100%;
  height: auto;
}

.proj-description {
  line-height: 1.8;
  padding: 2px 10px;
}

.proj-item-flex {
  padding: 6px 60px;
  display: flex;
  flex-direction: row;
}

.proj-controls{
  display: flex;
  flex-direction: row;
}

span {
  padding-top: 10px;
}

a {
  background-color: #EACF86;
  border: 1px solid #EACF86;
  color: #161c2c;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font: inherit;
  cursor: pointer;
  margin-right: 0.2rem;
  margin: 0.5rem 0.3rem;
  display: inline-block;
}

@media screen and (max-width: 1004px) {
    .proj-item-flex{
      flex-direction: column;
      padding: 6px 6px;
    }
    
    .proj-controls{
      display: flex;
      flex-direction: row;
      /* width: 400px; */
      margin: 10px 0px;
      text-align: center;
    }
  }

@media screen and (max-width: 700px) {
  .proj-item-flex{
    flex-direction: column;
    padding: 20px 6px;
    border-top: 1px solid #B6BFC5;
  }

  .proj-img {
    box-shadow: 10px 10px lightblue;
    width: 100%;
    height: auto;
    margin: 0;
  }

  .proj-description p {
    width: 100%;
  }

  .proj-controls{
    display: flex;
    flex-direction: column;
    justify-tracks: center;
    margin: 10px 0px;
    text-align: center;
  }
}

</style>