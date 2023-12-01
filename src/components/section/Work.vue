<template>
  <div class="work">
    <Company
      name="Bank of France"
      :from="new Date(2023, 2)"
      :to="new Date(2023, 8)"
      type="Internship"
    >
      <li>DevOps and MLOps roles with a focus on Docker/Podman container orchestration systems</li>
      <li>Automated PostgreSQL processes and migrated from Docker to Podman on RedHat-8</li>
      <li>Deployed Machine Learning/Deep Learning Speech-to-text models</li>
      <li>Conducted unit testing with Pytest and managed custom microservice deployments with Jenkins</li>
      <li>Developed Python APIs as microservices using FastAPI, gRPC, Python, etc.</li>
      <li>Implemented a Logging/Monitoring/Alerting standard and application log standard as a python package</li>
      <li>Monitored IA/Data microservices dashboards with Kibana and implemented a chatbot using Facebook's LLM Llama v2 with ReactJS and Vue</li>
    </Company>
    <Company
      name="TeamX Group"
      :from="new Date(2021, 0)"
      :to="new Date(2022, 8)"
      type="Full-time"
    >
      <li>Developed native Android banking app using Java/Kotlin and handled coding and deployment</li>
      <li>Worked as a Vue.js and Nuxt.js developer on microfrontend architecture for B2B2C applications</li>
      <li>Orchestrated code with Docker Compose and contributed to various individual projects</li>
    </Company>
    <!-- Add more Company components based on your other experiences as needed -->
  </div>
</template>

<script>
import Company from '../Company.vue';

export default {
  name: 'Work',
  components: {
    Company,
  },
};
</script>

<style scoped lang="scss">
.work {
}
</style>
