
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FriendsList } from "@/components/FriendsList";
import { PostFeed } from "@/components/PostFeed";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Users, Gift, Music, Video, Star, Globe } from "lucide-react";

const IvanProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-sm">
        <ProfileHeader />
        
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Info className="w-5 h-5 mr-2 text-gray-400" />
                      <h3 className="font-semibold text-gray-800">Информация</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex">
                        <span className="text-gray-500 w-24">Род занятий:</span>
                        <span>Царь, реформатор, полководец</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 w-24">Дата коронации:</span>
                        <span>16 января 1547 г.</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 w-24">Образование:</span>
                        <span>Самообразование, лучшие наставники Руси</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 w-24">Языки:</span>
                        <span>Русский, церковнославянский, латынь</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 w-24">Интересы:</span>
                        <span>Война, богословие, литература, шахматы</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Users className="w-5 h-5 mr-2 text-gray-400" />
                      <h3 className="font-semibold text-gray-800">Друзья <span className="text-gray-400 text-sm">208</span></h3>
                      <Link to="#" className="ml-auto text-blue-500 text-sm">Показать всех</Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="text-center">
                          <img 
                            src={`https://source.unsplash.com/random/100x100?medieval,noble,portrait&sig=${i}`} 
                            alt={`Друг ${i+1}`}
                            className="w-full aspect-square object-cover rounded-md mb-1"
                          />
                          <span className="text-xs truncate block">Друг {i+1}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Gift className="w-5 h-5 mr-2 text-gray-400" />
                      <h3 className="font-semibold text-gray-800">Подарки <span className="text-gray-400 text-sm">16</span></h3>
                      <Link to="#" className="ml-auto text-blue-500 text-sm">Показать все</Link>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="text-center">
                          <img 
                            src={`https://source.unsplash.com/random/80x80?gift,crown,royal&sig=${i}`} 
                            alt={`Подарок ${i+1}`}
                            className="w-full aspect-square object-cover rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <Tabs defaultValue="posts" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-4">
                  <TabsTrigger value="posts">Записи</TabsTrigger>
                  <TabsTrigger value="photos">Фотографии</TabsTrigger>
                  <TabsTrigger value="videos">Видео</TabsTrigger>
                  <TabsTrigger value="friends">Друзья</TabsTrigger>
                </TabsList>
                
                <TabsContent value="posts">
                  <PostFeed />
                </TabsContent>
                
                <TabsContent value="photos">
                  <div className="bg-white rounded-md border p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Фотографии Ивана</h2>
                      <Button variant="outline">Загрузить фото</Button>
                    </div>
                    
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {[...Array(34)].map((_, i) => (
                        <div key={i} className="aspect-square relative group overflow-hidden rounded-md">
                          <img 
                            src={`https://source.unsplash.com/random/300x300?russia,tsar,medieval,battle,kremlin,orthodox&sig=${i}`} 
                            alt={`Фото ${i+1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">Показать все фотографии</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="videos">
                  <div className="bg-white rounded-md border p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Видео Ивана</h2>
                      <Button variant="outline">Загрузить видео</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="relative rounded-md overflow-hidden">
                          <img 
                            src={`https://source.unsplash.com/random/400x300?russia,medieval,battle&sig=${i}`} 
                            alt={`Видео ${i+1}`}
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-gray-800 ml-1"></div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-sm">Видео Ивана Грозного #{i+1}</p>
                            <p className="text-white/70 text-xs">Просмотров: {Math.floor(Math.random() * 10000)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">Показать все видео</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="friends">
                  <FriendsList />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IvanProfile;
