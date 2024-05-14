const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd99bc2d3dfmsh75e645227ee034fp12af27jsnbefcf1ac4534',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
	}
};
const fetchIpInfo = ip =>{
    return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`, options)
        .then(res => res.json())
        .catch(error => console.error(error))
}

const $ = selector => document.querySelector(selector)

const form = document.getElementById('form')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const results = document.querySelector('#results')

form.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const {value} = input
    if(!value) return

    submit.setAttribute('disabled', '')

    const info = await fetchIpInfo(value)

    const {ip, city, country, org, latitude, longitude} = info

    if(info){
       
        results.innerHTML = ([`IP: ${ip} <br /> CITY: ${city} <br /> COUNTRY: ${country} <br /> ORG: ${org} <br /> LATITUDES: ${latitude} <br /> LONGITUDE: ${longitude}`])
        // results.innerHTML = JSON.stringify(info, null,2)
    }

    submit.removeAttribute('disabled')
})