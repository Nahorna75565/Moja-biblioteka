import { supabase } from './supabase.js'

const form = document.getElementById('formularzKsiazki')
const lista = document.getElementById('listaKsiazek')

// 📥 READ
async function pobierzKsiazki() {
  const { data, error } = await supabase
    .from('ksiazki')
    .select('*')

  if (error) {
    console.log('READ ERROR:', error)
    return
  }

  lista.innerHTML = ''

  data.forEach(k => {
    lista.innerHTML += `
      <div class="ksiazka">
        <h3>${k.tytul}</h3>
        <p><b>Autor:</b> ${k.autor}</p>
        <p>${k.opis}</p>

        <button onclick="usunKsiazke(${k.id})">Usuń</button>
      </div>
    `
  })
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const tytul = document.getElementById('tytul').value
  const autor = document.getElementById('autor').value
  const opis = document.getElementById('opis').value

  const { error } = await supabase
    .from('ksiazki')
    .insert([{ tytul, autor, opis }])

  if (error) {
    console.log('INSERT ERROR:', error)
    return
  }

  form.reset()
  pobierzKsiazki()
})

window.usunKsiazke = async function (id) {
  const { error } = await supabase
    .from('ksiazki')
    .delete()
    .eq('id', id)

  if (error) {
    console.log('DELETE ERROR:', error)
  }

  pobierzKsiazki()
}

pobierzKsiazki()

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const tytul = document.getElementById('tytul').value
  const autor = document.getElementById('autor').value
  const opis = document.getElementById('opis').value

  const { error } = await supabase
    .from('ksiazki')
    .insert([
      {
        tytul,
        autor,
        opis
      }
    ])

  if (error) {
    console.log('INSERT ERROR:', error)
    return
  }

  form.reset()
  pobierzKsiazki()
})