
function togglemySkills(): void {
    const mySkillsSection = document.getElementById("mySkills");
    if (mySkillsSection) {
        mySkillsSection.style.display = mySkillsSection.style.display === "none" ? "block" : "none";
    }
}
