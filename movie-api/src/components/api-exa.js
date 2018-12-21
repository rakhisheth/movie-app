window.addEventListener("load", function() {
  document.getElementById("sub").addEventListener("click", async function() {
    let username = document.getElementById("user").value;
    try {
      const result = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await result.json();
      let blah = "";
      data.forEach(obj => {
        blah += `<div class="repo-names"><p>${obj.name.link(
          obj.html_url
        )}</p></div>`;
      });
      document.getElementById("repoList").innerHTML = blah;
    } catch (error) {
      alert("User not found");
    }
  });
});
r;
