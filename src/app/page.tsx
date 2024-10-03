"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import {BriefcaseBusiness, Cake, MailPlus, Github, Linkedin, GraduationCap, CircleUserRound, Palette, MapPin, BadgeCheck, Share2, MessageSquare, ThumbsUp, Flame, TvMinimalPlay, AtSign } from "lucide-react"


export default function PortfolioProfile() {

  const [isModalOpen, setIsModalOpen, ] = useState(false);
  const [liked, setLiked] = useState(false);

  // Cargar el estado de "like" desde localStorage al montar el componente
  useEffect(() => {
    const storedLiked = localStorage.getItem('liked');
    if (storedLiked === 'true') {
      setLiked(true);
    }
  }, []);

  const handleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState); // Cambia el estado de "like"
    localStorage.setItem('liked', JSON.stringify(newLikedState)); // Guarda el nuevo estado en localStorage
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Cover Photo */}
        <div className="relative h-80 bg-gray-300 rounded-b-lg overflow-hidden">
          <img
            src="images/portada.svg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="relative bg-white shadow rounded-lg -mt-16 mx-4">
          <div className="flex flex-col sm:flex-row items-center p-4">
            <Avatar className="w-32 h-32 border-2 border-black -mt-16 sm:-mt-24">
              <AvatarImage src="images/porfile.jpg" alt="Profile picture" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <h1 className="text-2xl font-bold flex items-center">Jhonatan Camelo<BadgeCheck className="ml-2" /></h1>
              <p className="text-gray-500 items-center">Junior Back-end Developer</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-auto flex space-x-2">
              <Button onClick={() => setIsModalOpen(true)}>
                <MailPlus className="mr-2 h-4 w-4" />
                Contactar
              </Button>
              <a href="https://github.com/jcamelo11" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Navigation */}
         
        </div>
    
        {/* Content Area */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mx-4">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CircleUserRound />Información</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                Soy un desarrollador junior que codifica por el día y sueña con líneas de código por la noche. Mi pasión por aprender es tan grande que a veces me pregunto si debería cobrar por mis horas de ‘investigación’. Si quieres a alguien que convierta problemas en soluciones creativas y añada un toque de humor a cada proyecto, ¡hablemos!
                </p>
                <p className="text-sm flex items-center"><BriefcaseBusiness className="mr-2 h-4 w-4" /> Disponible</p>
                <p className="text-sm mt-2 flex items-center"><AtSign  className="mr-2 h-4 w-4" /> jcamelo625@gmail.com</p>
                <p className="text-sm mt-2 flex items-center">< MapPin className="mr-2 h-4 w-4" /> Colombia</p>
                <p className="text-sm mt-2 flex items-center"><Cake className="mr-2 h-4 w-4" /> April 12th</p>
                
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Palette />Habilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 ">
                  <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>PHP</Badge>
                    <Badge>Laravel</Badge>
                    <Badge>MySql</Badge>
                    <Badge>Git</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Projects */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Proyectos Destacados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">E-commerce Platform</h3>
                      <p className="text-sm text-gray-500">Una plataforma de comercio electrónico completa</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Proyecto
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Task Management App</h3>
                      <p className="text-sm text-gray-500">Aplicación de gestión de tareas con React y Node.js</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Proyecto
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"> <GraduationCap />Educación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Tnlgo. En Análisis y Desarrollo de Sistemas de Información</h3>
                    <p className="text-sm">Servicio Nacianal de Aprendizaje - SENA </p>
                    <p className="text-sm text-gray-500">Valledupar, Cesar • Oct 2021 - Abril 2024</p>
                  </div>
                  {/* <div>
                    <h3 className="font-semibold">Desarrollador Front-end</h3>
                    <p className="text-sm text-gray-500">Web Solutions Inc. • 2018 - 2020</p>
                    <p className="text-sm mt-2">Creación de interfaces de usuario interactivas y responsivas con HTML, CSS y JavaScript.</p>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"> <BriefcaseBusiness />Experiencia prácticas profecionales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                   <div>
                    <h3 className="font-semibold">Apoyo en el seguimiento de la etapa productiva</h3>
                    <p className="text-sm text-gray-500">Servicio Nacianal de Aprendizaje - SENA • Octubre 2023 - Abril 2024</p>
                    <p className="text-sm mt-2">
                      Desarrollo de un sistema interactivo para apoyo a los aprendices durante su etapa productiva.
                    </p>
                  </div> 
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"> <Flame />Proyectos destacados</CardTitle>
              </CardHeader>
            <CardContent className="p-">
              <div className="space-y-6">
               
                  <div  className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src="images/porfile.jpg" alt="Juan Pérez" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold flex items-center gap-1">Jhonatan Camelo<BadgeCheck className="mr-2 h-4 w-4"/></p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Hace  horas</p>
                      </div>
                    </div>
                    <p className=" text-lg font-bold mb-1">Sistema de apoyo en la etapa productiva</p>
                    <p className="mb-3">Este sito ha sido diseñado para los aprendices en su etapa productiva, proporcionando toda la información necesaria sobre el proceso. Su funcionalidad principal es una guía interactiva que explica detalladamente cómo completar los informes que los aprendices deben entregar. </p>
                    <img
                      src={`images/proyecto-sena.png`}
                      alt={`Post `}
                      className="w-full rounded-lg mb-3"
                    />
                    <div className="flex  items-center mt-4 pt-4 gap-3 ">
                      <Button variant="ghost"  onClick={handleLike}>
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {liked ? <strong>Te gusta</strong> : 'Me gusta'} {/* Cambia el texto según el estado */}
                      </Button>
                      <a href="https://github.com/jcamelo11/proyecto-sena.git" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                      <a href="https://seguimientocbc.000.pe/" target="_blank" rel="noopener noreferrer">
                        <Button  >
                          <TvMinimalPlay className="mr-2 h-4 w-4" />
                          Live
                        </Button>
                      </a>
                        
                       
                    </div>
                  </div>

                  <div  className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src="images/porfile.jpg" alt="Juan Pérez" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold flex items-center gap-1">Jhonatan Camelo<BadgeCheck className="mr-2 h-4 w-4"/></p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Hace 3 horas</p>
                      </div>
                    </div>
                    <p className=" text-lg font-bold mb-1">Sistema de apoyo en la etapa productiva</p>
                    <p className="mb-3">Este sito ha sido diseñado para los aprendices en su etapa productiva, proporcionando toda la información necesaria sobre el proceso. Su funcionalidad principal es una guía interactiva que explica detalladamente cómo completar los informes que los aprendices deben entregar. </p>
                    <img
                      src={`images/proyecto-sena.png`}
                      alt={`Post `}
                      className="w-full rounded-lg mb-3"
                    />
                    <div className="flex  items-center mt-4 pt-4 ">
                      <Button variant="ghost"  onClick={handleLike}>
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {liked ? <strong>Te gusta</strong> : 'Me gusta'} {/* Cambia el texto según el estado */}
                      </Button>
                      <a href="https://github.com/jcamelo11/proyecto-sena.git" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                      <a href="https://seguimientocbc.000.pe/" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" >
                          <TvMinimalPlay className="mr-2 h-4 w-4" />
                          Live
                        </Button>
                      </a>
                        
                       
                    </div>
                  </div>
                
              </div>
            </CardContent>
          </Card>

           
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 mb-6 px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <nav className="flex flex-wrap justify-center space-x-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Términos</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Publicidad</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Cookies</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Más</a>
          </nav>
          <p className="mt-4 text-center text-sm text-gray-400 dark:text-gray-500">
            © 2024 Facebook Clone. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Add Friend Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contactarme</DialogTitle>
           
              <form className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Nombre" />
                    <Input placeholder="Email" type="email" />
                  </div>
                  <Input placeholder="Asunto" />
                  <Textarea placeholder="Mensaje" />

              </form>
            
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => {
              // Here you would typically send the friend request
              console.log("Friend request sent")
              setIsModalOpen(false)
            }}>
              Contactar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  )
}