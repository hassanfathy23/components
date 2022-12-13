import Router from 'next/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Nprogress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 500,
    showSpinner: true,
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
})

Router.events.on('routeChangeStart', () => Nprogress.start())
Router.events.on('routeChangeComplete', () => Nprogress.done())
Router.events.on('routeChangeError', () => Nprogress.done())

export default function NprogressComponent() {
    return null
}