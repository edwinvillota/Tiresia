

async function getCountries () {
  return new Promise((resolve, reject) => {
    const input = document.getElementById('country')
    fetch('https://raw.githubusercontent.com/millan2993/countries/master/json/countries.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const { countries } = data
        countries.forEach(c => {
          const newOption = document.createElement('option')
          newOption.setAttribute('value', c.id)
          newOption.innerHTML = c.name
          input.appendChild(newOption)
        })
      })
  })
}

async function getStates (e) {
  return new Promise((resolve, reject) => {
    const input = document.getElementById('state')
    const countryId = e.target.value

    input.innerHTML = ''

    fetch('https://raw.githubusercontent.com/millan2993/countries/master/json/states.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const { states } = data
      const countryStates = states.filter(s => s.id_country == countryId)
      countryStates.forEach(s => {
        const newOption = document.createElement('option')
        newOption.setAttribute('value', s.id)
        newOption.innerHTML = s.name
        input.appendChild(newOption)
      })
    })
  })
}

async function getCities (e) {
  return new Promise((resolve, reject) => {
    const input = document.getElementById('city')
    const stateId = e.target.value

    input.innerHTML = ''

    fetch('https://raw.githubusercontent.com/millan2993/countries/master/json/cities.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const { cities } = data
      const stateCities = cities.filter(c => c.id_state == stateId)
      stateCities.forEach(c => {
        const newOption = document.createElement('option')
        newOption.setAttribute('value', c.id)
        newOption.innerHTML = c.name
        input.appendChild(newOption)
      })
    })
  })
}


document.getElementById('country').addEventListener('change', getStates)
document.getElementById('state').addEventListener('change', getCities)


getCountries()