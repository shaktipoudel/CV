const cvData = JSON.parse(localStorage.getItem('cvData'));
    if (cvData) {
      document.getElementById('profilePhoto').src = cvData.photo || 'https://via.placeholder.com/150';
      document.getElementById('cvName').textContent = cvData.fullName || '';
      document.getElementById('cvNameRight').textContent = cvData.fullName || '';
      document.getElementById('cvEmail').textContent = cvData.email || '';
      document.getElementById('cvPhone').textContent = cvData.phone || '';
      document.getElementById('cvAddress').textContent = cvData.address || '';
      document.getElementById('cvProfile').textContent = cvData.profile || '';

      const skillsList = document.getElementById('skillsList');
      skillsList.innerHTML = '';
      if (cvData.skills && cvData.skills.length > 0) {
        cvData.skills.forEach(skill => {
          skillsList.innerHTML += `<li>${skill}</li>`;
        });
      }

      const eduList = document.getElementById('cvEducation');
      eduList.innerHTML = '';
      if (cvData.education && cvData.education.length > 0) {
        cvData.education.forEach(e => {
          eduList.innerHTML += `<li>${e}</li>`;
        });
      }

      const extraList = document.getElementById('cvExtra');
      extraList.innerHTML = '';
      if (cvData.extra && cvData.extra.length > 0) {
        cvData.extra.forEach(e => {
          extraList.innerHTML += `<li>${e}</li>`;
        });
      }

      const workList = document.getElementById('cvWork');
      workList.innerHTML = '';
      if (cvData.work && cvData.work.length > 0) {
        cvData.work.forEach(w => {
          workList.innerHTML += `<li><strong>${w.title}</strong><br>${w.desc}</li>`;
        });
      }
    }