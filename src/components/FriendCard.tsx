
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface Friend {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  important?: boolean;
}

interface FriendCardProps {
  friend: Friend;
}

export const FriendCard = ({ friend }: FriendCardProps) => {
  return (
    <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
      <Avatar className="w-12 h-12 mr-3">
        {friend.imageUrl ? (
          <img src={friend.imageUrl} alt={friend.name} />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600">
            <User className="w-6 h-6" />
          </div>
        )}
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">{friend.name}</p>
        <p className="text-sm text-gray-500 truncate">{friend.role}</p>
      </div>
      <Button variant="ghost" size="sm" className="ml-2">
        Написать
      </Button>
    </div>
  );
};
