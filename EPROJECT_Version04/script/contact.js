function saveContacttoLocalstorage() {
    var name = document.getElementById('contact_name').value;
    var mail = document.getElementById('contact_mail').value;
    var subject = document.getElementById('contact_subject').value;
    var message = document.getElementById('contact_message').value;

    // Retrieve existing messages or initialize an empty array
    var existingMessages = JSON.parse(localStorage.getItem('Messages')) || [];

    // Add the new message to the array
    existingMessages.push({
        name: name,
        mail: mail,
        subject: subject,
        message: message
    });

    // Store the updated array in local storage
    localStorage.setItem('Messages', JSON.stringify(existingMessages));



    // Load messages after saving
    displayDataInTable('message');
}

// Function to generate and display the table
function displayDataInTable(containerClassName) {
    var container = document.querySelector('.' + containerClassName);
    var dataArray = JSON.parse(localStorage.getItem('Messages'));

    if (container && Array.isArray(dataArray)) {
        // Clear existing content
        container.innerHTML = '';

        // Create the table
        var tableHTML = '<table><tr><th>Name</th><th>Email</th><th>Subject</th><th>Message</th><th></th></tr>';
        tableHTML += dataArray.map(function (item, index) {
            return `<tr>
                <td>${item.name}</td>
                <td>${item.mail}</td>
                <td>${item.subject}</td>
                <td>${item.message}</td>
                <td>
                    <button onclick="editMessage(${index})">Edit</button> || <button onclick="clearMessage(${index})">Clear</button>
                </td>
            </tr>`;
        }).join('');
        tableHTML += '</table>';

        // Append the table to the container
        container.innerHTML = tableHTML;
    }
}

// Function to edit a message
function editMessage(index) {
    var dataArray = JSON.parse(localStorage.getItem('Messages'));

    // Assume there is a form with id="editForm" containing input fields
    document.getElementById('contact_name').value = dataArray[index].name;
    document.getElementById('contact_mail').value = dataArray[index].mail;
    document.getElementById('contact_subject').value = dataArray[index].subject;
    document.getElementById('contact_message').value = dataArray[index].message;

    // Remove the message from the array
    dataArray.splice(index, 1);

    // Update localStorage with the modified array
    localStorage.setItem('Messages', JSON.stringify(dataArray));

    // Reload the table
    displayDataInTable('message');
}

// Function to clear a message
function clearMessage(index) {
    var dataArray = JSON.parse(localStorage.getItem('Messages'));

    // Remove the message from the array
    dataArray.splice(index, 1);

    // Update localStorage with the modified array
    localStorage.setItem('Messages', JSON.stringify(dataArray));

    // Reload the table
    displayDataInTable('message');
}



// Call the function to display data
displayDataInTable('message');