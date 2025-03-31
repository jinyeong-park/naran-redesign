import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Book, Info } from "lucide-react"

export default function ClubPage() {
  return (
    <div className="max-w-5xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-1/3 p-4 border-r">
          <div className="flex items-center space-x-4 mb-4">
            <Badge className="bg-blue-500 text-white rounded-md px-3 py-1">쿠펴덱</Badge>
            <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white">
              <Info className="h-5 w-5" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Wizard" />
                <AvatarFallback>WZ</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4">Wizard</h2>
            <div className="flex justify-between w-full mt-4">
              <div className="text-center">
                <div className="font-bold">281</div>
                <div className="text-xs text-gray-500">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold">3720</div>
                <div className="text-xs text-gray-500">Impact</div>
              </div>
              <div className="text-center">
                <div className="font-bold">1295</div>
                <div className="text-xs text-gray-500">Followers</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm">책읽는 것을 틀 보닷 좋하게 하고 싶은 쿠퍼티노에 사는 이름씨</p>
          </div>

          <div className="flex justify-between mt-6">
            <div className="text-center">
              <div className="font-bold">84</div>
              <div className="text-xs text-gray-500">Read books</div>
            </div>
            <div className="text-center">
              <div className="font-bold">58</div>
              <div className="text-xs text-gray-500">Joined groups</div>
            </div>
            <div className="text-center">
              <div className="font-bold">7</div>
              <div className="text-xs text-gray-500">Reviewed books</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm">쿠퍼덱님은 독서 마법사 이번달엔 독서 전도에 맞춰서 잘 읽고 계십니다!</p>
          </div>

          <div className="mt-6">
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">참여: 영어 낭독 - Guns, Germs, Steel</h3>
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="font-bold">28</div>
                  <div className="text-xs text-gray-500">HighFives</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">36</div>
                  <div className="text-xs text-gray-500">Recognition</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">100%</div>
                  <div className="text-xs text-gray-500">Participation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">리딩: 시사기사분석반</h3>
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="font-bold">1</div>
                  <div className="text-xs text-gray-500">Leading</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">8</div>
                  <div className="text-xs text-gray-500">Have led</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">1</div>
                  <div className="text-xs text-gray-500">Highfives</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">1</div>
                  <div className="text-xs text-gray-500">Recognition</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">운영: 8기 운영진</h3>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 p-4">
          <div className="mb-6">
            <h2 className="font-bold mb-2">Today's Meetings</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>영어 낭독</li>
              <li>운영진 모임</li>
            </ul>

            <h2 className="font-bold mt-6 mb-2">Today's reading plan</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gun, Germs, Steel: Chapter 1</li>
            </ul>

            <h2 className="font-bold mt-6 mb-2">This Week's plan</h2>
          </div>

          <div className="border rounded-lg p-4 mb-6">
            <h2 className="font-bold mb-4">Feed</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>실시간 독서 모임방에 머물 술때 메세지 업데이트</li>
              <li>회원간 메시지</li>
              <li>나만 공지</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">쿠퍼덱을 위한 오늘의 독서팁</h3>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">쿠퍼덱의 완독 리스트</h3>
              <div className="flex items-center mb-2">
                <Book className="h-6 w-6 mr-2" />
              </div>
              <div className="text-xs">
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>09/01/23: Guns, Germs, and</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm">Read books</span>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">쿠퍼덱의 미래 독서 노트</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

