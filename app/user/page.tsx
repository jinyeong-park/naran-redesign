import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Book } from "lucide-react";

export default function UserPage() {
  return (
    <div className="max-w-5xl mx-auto bg-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">
          2023-09-경제-도덕-경제학 회원분들과 나누고 싶어요
        </h1>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-start space-x-4 mb-6">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src="/placeholder.svg?height=80&width=80"
                alt="Mega Club"
              />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex flex-wrap gap-1 mb-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <Avatar key={i} className="w-6 h-6">
                    <AvatarImage
                      src={`/placeholder.svg?height=24&width=24&text=${i}`}
                      alt={`Member ${i}`}
                    />
                    <AvatarFallback>M{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <h2 className="text-xl font-bold">Mega Club</h2>
            </div>
          </div>

          <div className="flex justify-between w-full mb-8">
            <div className="text-center">
              <div className="font-bold">28</div>
              <div className="text-xs text-gray-500">Members</div>
            </div>
            <div className="text-center">
              <div className="font-bold">372</div>
              <div className="text-xs text-gray-500">Posts</div>
            </div>
            <div className="text-center">
              <div className="font-bold">3</div>
              <div className="text-xs text-gray-500">Ranking</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-center mb-4">
              이번주 참여율
            </h2>
            <div className="text-center">
              <div className="text-5xl font-bold">100%</div>
              <div className="text-sm text-gray-500 mt-2">Participation</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              이번주의 회원 (Member of This Week)
            </h2>
            <div className="flex justify-around">
              <div className="text-center">
                <Avatar className="w-16 h-16 mx-auto">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="바람"
                  />
                  <AvatarFallback>바람</AvatarFallback>
                </Avatar>
                <div className="mt-2 font-bold">바람</div>
                <div className="text-xs text-gray-500">Leader</div>
              </div>
              <div className="text-center">
                <Avatar className="w-16 h-16 mx-auto">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="Skim"
                  />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <div className="mt-2 font-bold">Skim</div>
                <div className="text-xs text-gray-500">최대 Highlyer</div>
              </div>
              <div className="text-center">
                <Avatar className="w-16 h-16 mx-auto">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="Haru"
                  />
                  <AvatarFallback>HR</AvatarFallback>
                </Avatar>
                <div className="mt-2 font-bold">Haru</div>
                <div className="text-xs text-gray-500">Influencer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 p-4">
          <div className="mb-4">
            <div className="bg-gray-100 p-3 rounded-md mb-2">공유</div>
            <div className="border rounded-lg p-4">
              <h2 className="font-bold mb-4">이번달 주요 일정</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>09/30/2023 시작 준비 모임</li>
                <li>10/24/2023 1차 서평</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-start space-x-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="/placeholder.svg?height=48&width=48"
                    alt="Member"
                  />
                  <AvatarFallback>M1</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold">09/23/2023</div>
                  <p className="text-sm mt-1">
                    안녕하세요! 지난주에 처음으로 참여를 근로으로 해준 이유는
                    제로섬 게임의 특색에서 본 어니라의 회의성과 살펴보고
                    싶어서였습니다. 책이가 무엇하게 커져야 사실 참여자들의 서로
                    더욱 자 않고서도 자신의 동점 및 상 있습니다만.
                  </p>
                  <div className="text-xs text-gray-500 mt-2">
                    오브건 그룹셰어
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="/placeholder.svg?height=48&width=48"
                    alt="Member"
                  />
                  <AvatarFallback>M2</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold">09/10/2023</div>
                  <p className="text-sm mt-1">
                    안녕하세요! 지난주에 처음으로 참여를 근로으로 해준 이유는
                    제로섬 게임의 특색에서 본 어니라의 회의성과 살펴보고
                    싶어서였습니다. 책이가 무엇하게 커져야 사실 참여자들의 서로
                    더욱 자 않고서도 자신의 동점 및 상 있습니다만.
                  </p>
                  <div className="text-xs text-gray-500 mt-2">
                    옐로우북 그룹셰어
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="border rounded-lg p-4">
              <h2 className="font-bold mb-4">
                이번주의 회원 (Member of This Week)
              </h2>
            </div>
          </div>

          <div className="mb-4">
            <div className="border rounded-lg p-4">
              <h2 className="font-bold mb-4">그룹 독서노트</h2>
              <div className="flex items-center space-x-2">
                <Book className="h-6 w-6" />
                <span className="font-medium">Read books</span>
              </div>
              <div className="text-xs mt-2">
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>09/01/23: Guns, Germs, and</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
