'use client';

import { motion } from 'framer-motion';
import { Car, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Terminos() {
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
              Términos y Condiciones
            </h1>
            <p className="text-gray-400 mb-8">Última actualización: Enero 2025</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
                <p className="leading-relaxed">
                  Al acceder y utilizar Carpuling, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con
                  alguna parte de estos términos, no debes usar nuestra plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
                <p className="leading-relaxed">
                  Carpuling es una plataforma que conecta conductores con pasajeros que desean compartir viajes hacia destinos similares.
                  Actuamos como intermediarios y no somos responsables de la conducta de los usuarios ni de los viajes realizados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Registro y Cuenta de Usuario</h2>
                <div className="space-y-3 leading-relaxed">
                  <p><strong className="text-white">Edad Mínima:</strong> Debes tener al menos 18 años para usar Carpuling.</p>
                  <p><strong className="text-white">Información Veraz:</strong> Te comprometes a proporcionar información precisa y actualizada.</p>
                  <p><strong className="text-white">Seguridad de Cuenta:</strong> Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.</p>
                  <p><strong className="text-white">Uso Personal:</strong> Tu cuenta es personal e intransferible.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Responsabilidades del Conductor</h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Poseer licencia de conducir válida y vigente</li>
                  <li>Mantener el vehículo en condiciones seguras y con seguro vigente</li>
                  <li>Cumplir con todas las leyes de tránsito aplicables</li>
                  <li>Proporcionar información precisa sobre el viaje</li>
                  <li>Tratar a los pasajeros con respeto y cortesía</li>
                  <li>No conducir bajo la influencia de alcohol o drogas</li>
                  <li>No exceder la capacidad de pasajeros del vehículo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Responsabilidades del Pasajero</h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Ser puntual en el punto de encuentro acordado</li>
                  <li>Pagar el monto acordado por el viaje</li>
                  <li>Tratar al conductor y otros pasajeros con respeto</li>
                  <li>No fumar ni consumir sustancias prohibidas durante el viaje</li>
                  <li>Seguir las reglas establecidas por el conductor</li>
                  <li>Reportar cualquier comportamiento inapropiado</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Pagos y Tarifas</h2>
                <div className="space-y-3 leading-relaxed">
                  <p>
                    Los conductores establecen las tarifas basadas en el costo compartido del viaje. Carpuling puede cobrar una comisión
                    por el uso de la plataforma.
                  </p>
                  <p><strong className="text-white">Cancelaciones:</strong> Las políticas de cancelación se establecen al momento de la reserva.</p>
                  <p><strong className="text-white">Reembolsos:</strong> Los reembolsos están sujetos a nuestra política de cancelación.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Calificaciones y Reseñas</h2>
                <p className="leading-relaxed">
                  Los usuarios pueden calificar y reseñar sus experiencias. Las reseñas deben ser honestas, precisas y respetuosas.
                  Nos reservamos el derecho de eliminar contenido inapropiado o falso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Prohibiciones</h2>
                <p className="leading-relaxed mb-3">Está estrictamente prohibido:</p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Usar la plataforma con fines comerciales no autorizados</li>
                  <li>Acoso, discriminación o comportamiento abusivo</li>
                  <li>Proporcionar información falsa o engañosa</li>
                  <li>Violar leyes locales, nacionales o internacionales</li>
                  <li>Compartir tu cuenta con terceros</li>
                  <li>Intentar hackear o comprometer la seguridad de la plataforma</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Limitación de Responsabilidad</h2>
                <p className="leading-relaxed">
                  Carpuling actúa únicamente como plataforma intermediaria. No somos responsables por:
                </p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed mt-3">
                  <li>Accidentes, lesiones o daños durante los viajes</li>
                  <li>Pérdida o daño de pertenencias personales</li>
                  <li>Disputas entre usuarios</li>
                  <li>Cancelaciones o cambios en los viajes</li>
                  <li>Conducta de los usuarios fuera de la plataforma</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Seguridad y Verificación</h2>
                <p className="leading-relaxed">
                  Implementamos medidas de verificación, pero no garantizamos la conducta de los usuarios. Recomendamos verificar
                  perfiles, leer reseñas y usar el sentido común al compartir viajes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Suspensión y Terminación</h2>
                <p className="leading-relaxed">
                  Nos reservamos el derecho de suspender o terminar cuentas que violen estos términos, sin previo aviso.
                  Los usuarios también pueden cerrar sus cuentas en cualquier momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Propiedad Intelectual</h2>
                <p className="leading-relaxed">
                  Todos los contenidos, marcas, logos y materiales de Carpuling son propiedad nuestra o de nuestros licenciantes.
                  No puedes usar, copiar o distribuir nuestro contenido sin autorización.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Modificaciones</h2>
                <p className="leading-relaxed">
                  Podemos modificar estos términos en cualquier momento. Los cambios significativos se notificarán a través de la plataforma.
                  El uso continuado del servicio después de los cambios constituye aceptación de los nuevos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">14. Ley Aplicable y Jurisdicción</h2>
                <p className="leading-relaxed">
                  Estos términos se rigen por las leyes del país donde Carpuling está registrada. Cualquier disputa se resolverá
                  en los tribunales competentes de dicha jurisdicción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">15. Contacto</h2>
                <p className="leading-relaxed">
                  Para preguntas sobre estos términos o sobre el servicio, contáctanos:
                </p>
                <div className="mt-4 p-6 bg-zinc-900 border border-zinc-700 rounded-xl">
                  <p className="text-white"><strong>Email:</strong> legal@carpuling.com</p>
                  <p className="text-white mt-2"><strong>Soporte:</strong> soporte@carpuling.com</p>
                  <p className="text-white mt-2"><strong>Teléfono:</strong> +1 (555) 123-4567</p>
                </div>
              </section>

              <div className="mt-12 p-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl">
                <p className="text-white font-semibold mb-2">Importante</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Al usar Carpuling, confirmas que has leído, entendido y aceptado estos Términos y Condiciones,
                  así como nuestra Política de Privacidad. Si no estás de acuerdo, por favor no uses nuestros servicios.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
