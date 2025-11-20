'use client';

import { motion } from 'framer-motion';
import { Car, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Carpuling
              </span>
            </Link>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Volver</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
            <p className="text-gray-400 mb-8">Última actualización: Enero 2025</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introducción</h2>
                <p className="leading-relaxed">
                  En Carpuling, nos comprometemos a proteger tu privacidad y tus datos personales. Esta política describe cómo recopilamos,
                  usamos y protegemos tu información cuando utilizas nuestra plataforma de carpooling.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Información que Recopilamos</h2>
                <div className="space-y-3 leading-relaxed">
                  <p><strong className="text-white">Información de Perfil:</strong> Nombre, correo electrónico, número de teléfono, fotografía de perfil.</p>
                  <p><strong className="text-white">Información de Viaje:</strong> Origen, destino, horarios, preferencias de viaje.</p>
                  <p><strong className="text-white">Información del Vehículo:</strong> Marca, modelo, color, matrícula (para conductores).</p>
                  <p><strong className="text-white">Información de Pago:</strong> Datos necesarios para procesar pagos de manera segura.</p>
                  <p><strong className="text-white">Datos de Uso:</strong> Información sobre cómo interactúas con nuestra plataforma.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cómo Usamos tu Información</h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Facilitar y mejorar nuestros servicios de carpooling</li>
                  <li>Conectar conductores con pasajeros</li>
                  <li>Procesar pagos y transacciones</li>
                  <li>Verificar identidades y mantener la seguridad de la plataforma</li>
                  <li>Enviar notificaciones sobre viajes y actualizaciones del servicio</li>
                  <li>Mejorar la experiencia del usuario mediante análisis de datos</li>
                  <li>Cumplir con requisitos legales y regulatorios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Compartir Información</h2>
                <p className="leading-relaxed mb-3">
                  Compartimos tu información de manera limitada y responsable:
                </p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li><strong className="text-white">Con otros usuarios:</strong> Información necesaria para coordinar viajes (nombre, foto, calificaciones)</li>
                  <li><strong className="text-white">Proveedores de servicios:</strong> Para procesamiento de pagos, almacenamiento en la nube, análisis</li>
                  <li><strong className="text-white">Autoridades legales:</strong> Cuando sea requerido por ley</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Seguridad de Datos</h2>
                <p className="leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado,
                  pérdida o alteración. Esto incluye encriptación, controles de acceso y auditorías de seguridad regulares.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Tus Derechos</h2>
                <p className="leading-relaxed mb-3">Tienes derecho a:</p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Acceder a tus datos personales</li>
                  <li>Corregir información inexacta</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Cookies y Tecnologías Similares</h2>
                <p className="leading-relaxed">
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el uso de la plataforma y personalizar contenido.
                  Puedes controlar el uso de cookies a través de la configuración de tu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Retención de Datos</h2>
                <p className="leading-relaxed">
                  Conservamos tu información personal solo durante el tiempo necesario para cumplir los propósitos descritos en esta política,
                  a menos que la ley requiera o permita un período de retención más largo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Cambios a Esta Política</h2>
                <p className="leading-relaxed">
                  Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios significativos publicando
                  la nueva política en nuestra plataforma y actualizando la fecha de &ldquo;última actualización&rdquo;.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
                <p className="leading-relaxed">
                  Si tienes preguntas sobre esta política de privacidad o sobre el manejo de tus datos personales, contáctanos en:
                </p>
                <div className="mt-4 p-6 bg-zinc-900 border border-zinc-700 rounded-xl">
                  <p className="text-white"><strong>Email:</strong> privacidad@carpuling.com</p>
                  <p className="text-white mt-2"><strong>Soporte:</strong> soporte@carpuling.com</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
