document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then(data => {
    data.forEach(element => {        

        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        let tdBreed = document.createElement('td')
        let tdSex = document.createElement('td')
        let tdEdit = document.createElement('td')
        let editButton = document.createElement('button')

        tdName.textContent = element.name
        tdBreed.textContent = element.breed 
        tdSex.textContent = element.sex
        editButton.textContent = 'Edit Dog' 
        
        document.getElementById('table-body').append(tr)
        tr.append(tdName, tdBreed, tdSex, tdEdit)
        tdEdit.append(editButton)

        editButton.addEventListener('click', () => {
            
            // document.getElementById('name').value = element.name
            // document.getElementById('breed').value = element.breed
            // document.getElementById('sex').value = element.sex

            document.getElementsByName('name')[0].value = element.name
            document.getElementsByName('breed')[0].value = element.breed
            document.getElementsByName('sex')[0].value = element.sex
        })

        // document.getElementById('dog-form').addEventListener('submit', (e) => {
        //     e.preventDefault
        //     let nameInput = document.getElementById('name')
        //     let breedInput = document.getElementById('breed')
        //     let sexInput = document.getElementById('sex')
        //} )
        })     
    
    })
})
