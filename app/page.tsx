'use client';

import { motion } from 'framer-motion';
import { Car, Users, MapPin, Shield, Clock, Leaf, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="p-2 rounded-xl">
                <img src="/carpuling-white.png" alt="Carpuling" className="w-10 h-10" />
              </div>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-400 hover:text-white transition">Características</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition">Cómo Funciona</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonios</a>
              <a href="#about" className="text-gray-400 hover:text-white transition">Nosotros</a>
            </div>
            <a href="https://app-carpooling-web.vercel.app/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition"
              >
                Comenzar
              </motion.button>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
<a href="https://app-carpooling-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">Viaja</a> <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">juntos</span>,
                ahorra más
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-xl text-gray-400"
              >
                Conecta con personas que van a tu mismo destino. Comparte viajes, reduce costos y cuida el medio ambiente.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a href="https://app-carpooling-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/50 transition flex items-center justify-center"
                  >
                    Buscar Viaje
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </a>
                <a href="https://app-carpooling-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full border-2 border-indigo-600 text-indigo-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-950 transition"
                  >
                    Ofrecer Viaje
                  </motion.button>
                </a>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex items-center space-x-6"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-black" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">+5,000 usuarios activos</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl shadow-2xl p-8"
                >
                  <Car className="w-full h-64 text-indigo-500" strokeWidth={1} />
                </motion.div>
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">¿Por qué Carpuling?</h2>
            <p className="mt-4 text-xl text-gray-400">La forma más inteligente de viajar</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, title: "Comunidad Confiable", desc: "Verifica perfiles y reseñas de otros usuarios antes de viajar" },
              { icon: MapPin, title: "Rutas Flexibles", desc: "Encuentra viajes que se ajusten a tu ruta y horario" },
              { icon: Shield, title: "Seguro y Protegido", desc: "Sistema de verificación y soporte 24/7" },
              { icon: Clock, title: "Ahorra Tiempo", desc: "Reserva en segundos y coordina fácilmente" },
              { icon: Leaf, title: "Eco-Friendly", desc: "Reduce tu huella de carbono compartiendo el viaje" },
              { icon: Car, title: "Ahorra Dinero", desc: "Divide los costos del viaje entre pasajeros" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-500/20 transition"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/50"
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">Cómo Funciona</h2>
            <p className="mt-4 text-xl text-gray-400">Tres pasos simples para comenzar</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Regístrate", desc: "Crea tu perfil en minutos" },
              { step: "2", title: "Busca o Publica", desc: "Encuentra viajes o comparte el tuyo" },
              { step: "3", title: "Viaja", desc: "Conecta y disfruta el viaje" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-indigo-500/20 transition">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg shadow-indigo-500/50"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">Lo que dicen nuestros usuarios</h2>
            <p className="mt-4 text-xl text-gray-400">Miles de viajeros felices comparten su experiencia</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "María González",
                role: "Viajera frecuente",
                image: "M",
                rating: 5,
                text: "Carpuling me ha permitido ahorrar mucho dinero en mis viajes diarios al trabajo. Además, he conocido gente increíble en el camino."
              },
              {
                name: "Carlos Ramírez",
                role: "Conductor verificado",
                image: "C",
                rating: 5,
                text: "Como conductor, me encanta poder ayudar a otros mientras recupero parte de los gastos de gasolina. La plataforma es muy fácil de usar."
              },
              {
                name: "Ana Martínez",
                role: "Estudiante",
                image: "A",
                rating: 5,
                text: "Perfecto para estudiantes como yo. Viajo de forma económica y segura todos los días a la universidad. Totalmente recomendado."
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-500/20 transition"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Sobre Nosotros</h2>
              <p className="text-xl text-gray-300 mb-6">
                En Carpuling, creemos que compartir viajes no solo reduce costos, sino que también construye comunidad y ayuda al planeta.
              </p>
              <p className="text-gray-400 mb-4">
                Fundada en 2024, nuestra misión es conectar a personas que comparten rutas similares, haciendo que el transporte sea más accesible, sostenible y social.
              </p>
              <p className="text-gray-400 mb-6">
                Con más de 5,000 usuarios activos, hemos facilitado miles de viajes, ahorrando toneladas de CO2 y creando conexiones significativas entre personas.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "5K+", label: "Usuarios" },
                  { number: "15K+", label: "Viajes" },
                  { number: "50T+", label: "CO2 Ahorrado" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    { icon: Shield, title: "Seguridad Primero", desc: "Verificamos todos los perfiles para tu tranquilidad" },
                    { icon: Leaf, title: "Compromiso Ambiental", desc: "Reduciendo la huella de carbono juntos" },
                    { icon: Users, title: "Comunidad Fuerte", desc: "Miles de usuarios confían en nosotros" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/50">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para comenzar tu viaje?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Únete a miles de usuarios que ya están viajando de forma inteligente
            </p>
            <a href="https://app-carpooling-web.vercel.app/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition"
              >
                Comenzar Ahora
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-xl">
                  <img src="/carpuling-white.png" alt="Carpuling" className="w-10 h-10" />
                </div>
              </div>
              <p className="text-gray-400">Viaja juntos, ahorra más</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-indigo-400 transition">Características</a></li>
                <li><a href="#how-it-works" className="hover:text-indigo-400 transition">Cómo Funciona</a></li>
                <li><a href="https://app-carpooling-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Comenzar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Compañía</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-indigo-400 transition">Sobre Nosotros</a></li>
                <li><a href="#testimonials" className="hover:text-indigo-400 transition">Testimonios</a></li>
                <li><a href="mailto:contacto@carpuling.com" className="hover:text-indigo-400 transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacidad" className="hover:text-indigo-400 transition">Privacidad</a></li>
                <li><a href="/terminos" className="hover:text-indigo-400 transition">Términos</a></li>
                <li><a href="mailto:soporte@carpuling.com" className="hover:text-indigo-400 transition">Soporte</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Carpuling. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
