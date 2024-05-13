const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd99bc2d3dfmsh75e645227ee034fp12af27jsnbefcf1ac4534',
		'X-RapidAPI-Host': 'ip-directory.p.rapidapi.com'
	}
};

const fetchIpInfo = ip =>{
    return fetch(`https://ip-directory.p.rapidapi.com/lookup/${ip}?risk=true&hostname=false`, options)
        .then(res => res.json())
        .catch(error => console.error(error))
}

const $ = selector => document.querySelector(selector)

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const results = document.querySelector('#results')

form.addEventListener('submit', async e =>{
    e.preventDefault()
    const {value} = input
    if(!value) return

    submit.setAttribute('disabled', '')

    const info = await fetchIpInfo(value)

    if(info){
        results.innerHTML = JSON.stringify(info, null, 2)
    }

    submit.removeAttribute('disabled')
})