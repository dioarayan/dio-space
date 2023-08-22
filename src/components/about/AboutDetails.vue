<template>
  <div class="about-content-flex">
    <div class="contact-flex">
      <ContactDetails v-for="contact in contacts" 
        :contact-details = "contact.details"
        :contact-icon = "contact.icon"
        :key = "contact.type"
      />
    </div>
    <div class="intro-flex">
      <p>My name is Dio Regine Arayan. I am an enthusiastic and driven web developer. I have a deep passion in coding and making dynamic and user-friendly websites that could help people on their personal and business goals. 
        <br><p>As a computer science graduate, I embarked on a journey that took me far beyond the world of programming. Despite my initial focus on computer science, life had a different trajectory in mind. Instead of diving headfirst into the tech world, I found myself drawn to the world of administrative services. This unexpected shift allowed me to explore new aspects of my abilities and interests. Years later, I found myself drawn back to the tech world, armed with a perspective that had been enriched by my diverse experiences. This time, my approach was holistic and multifaceted, blending my tech know-how with a newfound appreciation for creativity and innovation.</p>
        I believe that having a Computer Science diploma is a solid foundation, but in this rapidly evolving field of Software Development, dedication and continuous self-improvement is the key to further develop the necessary skills and knowledge.
      </p>
    </div>
  </div>
</template>

<script>
import ContactDetails from "./ContactDetails.vue";
import { ref } from "vue";

export default {
  components: {
    ContactDetails
  },
  setup(){
    const contacts = ref([
      { type: "number", details: "(+63) 960 655 8582", icon: "mdi:telephone-outline" },
      { type: "email", details: "drarayan1994@gmail.com", icon: "ic:outline-email"},
      { type: "location", details: "6521 Leyte, Philippines", icon: "ion:location-outline"}
    ])

    return {
      contacts
    }
  }
}
</script>

<style scoped>
.about-content-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 30px;
  line-height: 1.8;
}

.contact-flex, .intro-flex {
  padding: 20px 45px;
}
.contact-flex {
  height: 280px;
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  align-content: space-around;
  justify-content: center;
  text-align: center;
}

.intro-flex {
  flex-grow: 5;
  border-left: 1px solid #B6BFC5;
}

@media (max-width: 700px) {
  .about-content-flex {
    flex-direction: column-reverse;
    padding: 0px 20px;
  }

  .intro-flex {
    padding: 20px 10px;
    border-left: none;
    border-bottom: 1px solid #B6BFC5;
  }

}

</style>