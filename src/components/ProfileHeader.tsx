
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Mail, MoreHorizontal, Users, Edit, Camera } from "lucide-react";
import { Link } from "react-router-dom";

export const ProfileHeader = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative bg-gray-200 w-full h-80 overflow-hidden">
          <img 
            src="https://source.unsplash.com/random/1200x400?kremlin,moscow,russia,medieval" 
            alt="Обложка профиля" 
            className="w-full h-full object-cover"
          />
          <Button variant="outline" size="sm" className="absolute bottom-4 right-4 bg-black/30 text-white border-gray-400">
            <Camera className="w-4 h-4 mr-1" />
            Обновить обложку
          </Button>
        </div>
        
        <div className="absolute -bottom-16 left-4 sm:left-8 flex">
          <div className="relative">
            <Avatar className="w-32 h-32 sm:w-36 sm:h-36 border-4 border-white rounded-full">
              <img 
                src="https://source.unsplash.com/random/200x200?tsar,crown,medieval" 
                alt="Иван Грозный" 
                className="object-cover"
              />
            </Avatar>
            <Button variant="outline" size="sm" className="absolute bottom-1 right-1 rounded-full w-8 h-8 p-0 bg-gray-100">
              <Camera className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="pt-20 px-4 pb-4 border-b flex flex-col sm:flex-row justify-between">
        <div>
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Иван IV Грозный</h1>
            <span className="ml-2 text-blue-500 text-sm">✓</span>
          </div>
          <p className="text-gray-500 text-sm">Царь всея Руси</p>
          <p className="text-blue-500 text-sm mt-1">Редактировать страницу</p>
        </div>
        
        <div className="flex mt-4 sm:mt-0 space-x-2">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <Edit className="w-4 h-4 mr-1" />
            Написать сообщение
          </Button>
          <Button variant="secondary" size="icon">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="py-3 px-4 flex border-b overflow-x-auto whitespace-nowrap">
        <Link to="#" className="font-medium px-3 py-1 text-blue-500">Главная</Link>
        <Link to="#" className="font-medium px-3 py-1 text-gray-600">Записи</Link>
        <Link to="#" className="font-medium px-3 py-1 text-gray-600">Друзья <span className="text-gray-400 text-sm">{208}</span></Link>
        <Link to="#" className="font-medium px-3 py-1 text-gray-600">Фотографии <span className="text-gray-400 text-sm">{34}</span></Link>
        <Link to="#" className="font-medium px-3 py-1 text-gray-600">Видео</Link>
        <Link to="#" className="font-medium px-3 py-1 text-gray-600">Музыка</Link>
        <Link to="#" className="font-medium px-3 py-1 text-gray-600">Подробнее</Link>
      </div>
      
      <div className="px-4 py-3 border-b bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-sm">
            <span className="text-gray-500">День рождения:</span> 
            <span className="ml-1">25 августа 1530 г.</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Город:</span> 
            <span className="ml-1">Москва, Русское Царство</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Семейное положение:</span> 
            <span className="ml-1">всё сложно</span>
          </div>
        </div>
        <div className="mt-2 text-sm">
          <span className="text-gray-500">Статус:</span> 
          <span className="ml-1 italic">«Казнить нельзя помиловать»</span>
        </div>
      </div>
    </div>
  );
};
