 function addSkill() {
      const container = document.getElementById('skillsContainer');
      const div = document.createElement('div');
      div.className = 'multi-group';
      div.innerHTML = '<input type="text" placeholder="Skill">';
      container.appendChild(div);
    }

    function addEducation() {
      const container = document.getElementById('educationContainer');
      const div = document.createElement('div');
      div.className = 'multi-group';
      div.innerHTML = '<input type="text" placeholder="Education">';
      container.appendChild(div);
    }

    function addExtra() {
      const container = document.getElementById('extraContainer');
      const div = document.createElement('div');
      div.className = 'multi-group';
      div.innerHTML = '<input type="text" placeholder="Activity">';
      container.appendChild(div);
    }

    function addWork() {
      const container = document.getElementById('workContainer');
      const div = document.createElement('div');
      div.className = 'multi-group';
      div.innerHTML = '<input type="text" placeholder="Job Title"><textarea placeholder="Description" rows="2"></textarea>';
      container.appendChild(div);
    }

    let photoBase64 = "";
    const photoInput = document.getElementById('photo');
    const photoPreview = document.getElementById('photoPreview');

    photoInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          photoBase64 = e.target.result;
          photoPreview.src = photoBase64;
        }
        reader.readAsDataURL(file);
      }
    });

    const form = document.getElementById('cvForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const skills = [];
      document.querySelectorAll('#skillsContainer input').forEach(input => {
        if (input.value.trim()) skills.push(input.value.trim());
      });

      const education = [];
      document.querySelectorAll('#educationContainer input').forEach(input => {
        if (input.value.trim()) education.push(input.value.trim());
      });

      const extra = [];
      document.querySelectorAll('#extraContainer input').forEach(input => {
        if (input.value.trim()) extra.push(input.value.trim());
      });

      const work = [];
      document.querySelectorAll('#workContainer .multi-group').forEach(group => {
        const title = group.querySelector('input').value.trim();
        const desc = group.querySelector('textarea').value.trim();
        if (title && desc) work.push({ title, desc });
      });

      const cvData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        profile: document.getElementById('profile').value,
        skills,
        education,
        extra,
        work,
        photo: photoBase64
      };

      localStorage.setItem('cvData', JSON.stringify(cvData));
      window.location.href = 'index.html';
    });