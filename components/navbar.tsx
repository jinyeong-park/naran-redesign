import Link from "next/link";
import { Home, Book, Users, MessageSquare, User, Users2 } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border-b bg-white">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <div className="text-4xl font-bold text-pink-500">나란</div>
              <div className="ml-2">
                <div className="text-xs">Book Club</div>
                <div className="text-xs">Community</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="flex flex-col items-center">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">홈</span>
          </Link>
          <Link href="/books" className="flex flex-col items-center">
            <Book className="h-6 w-6" />
            <span className="text-xs mt-1">서재</span>
          </Link>
          <Link href="/community" className="flex flex-col items-center">
            <Users className="h-6 w-6" />
            <span className="text-xs mt-1">소그룹모임</span>
          </Link>
          <Link href="/messages" className="flex flex-col items-center">
            <MessageSquare className="h-6 w-6" />
            <span className="text-xs mt-1">메시지</span>
          </Link>
          <Link href="/user" className="flex flex-col items-center">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">회원</span>
          </Link>
          <Link href="/club" className="flex flex-col items-center">
            <Users2 className="h-6 w-6" />
            <span className="text-xs mt-1">클럽</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
