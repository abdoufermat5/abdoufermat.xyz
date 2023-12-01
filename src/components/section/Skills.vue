<script>
import { Skills } from "../../constants";
export default {
  name: "Skills",
  data: () => ({
    Skills,
  }),

  render() {
    return (
      <div class="skills-container">
        {Array.from(this.Skills.entries()).map(([key, value]) => (
          <div class="skill-category" key={key}>
            <h3>{value.title}</h3>
            <div class="skill-list">
              {value.skills.map((skill) => (
                <div class="skill-item" key={skill.name}>
                  <skill.icon class="icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
</script>

<style scoped lang="scss">
.skills-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  justify-content: space-between;
}

.skill-category {
  flex-basis: 30%;
  margin-bottom: 20px;
}

.skill-list {
  list-style-type: none;
  padding: 0;
}

.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    opacity: 0.7;
  }
}

@media screen and (max-width: 850px) {
  .skills-container {
    flex-direction: column;
  }

  .skill-category {
    flex-basis: 100%;
  }
}
</style>
