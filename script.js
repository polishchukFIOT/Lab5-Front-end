 function validateForm() {
      var form = document.getElementById("myForm");
      var elements = form.elements;

      for (var i = 0; i < elements.length; i++) {
        if (!elements[i].checkValidity()) {
          elements[i].classList.add("error");
        } else {
          elements[i].classList.remove("error");
        }
      }

      if (form.checkValidity()) {
        // Збір даних з форми
        var formData = {
          fullName: document.getElementById("fullName").value,
          phone: document.getElementById("phone").value,
          idCard: document.getElementById("idCard").value,
          faculty: document.getElementById("faculty").value,
          dob: document.getElementById("dob").value
        };

        // Виведення даних в консолі 
        console.log(formData);
    
      }
    }