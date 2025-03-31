import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays, BookOpen, Bell, User, Users2 } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto py-8 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">북클럽 나란</h1>

        <div className="border-t border-b py-4">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 relative">
            <Link href="/" className="text-sm md:text-base hover:text-gray-600">
              홈
            </Link>
            <Link
              href="/support"
              className="text-sm md:text-base hover:text-gray-600"
            >
              후원하기
            </Link>
            <Link
              href="/announcements"
              className="text-sm md:text-base hover:text-gray-600"
            >
              공지사항
            </Link>
            <Link
              href="/groups"
              className="text-sm md:text-base hover:text-gray-600"
            >
              모임소개/이용방법
            </Link>
            <Link
              href="/schedule"
              className="text-sm md:text-base hover:text-gray-600"
            >
              모임 일정
            </Link>
            <Link
              href="/notices"
              className="text-sm md:text-base hover:text-gray-600"
            >
              모임 공지
            </Link>
            <Link
              href="/small-groups"
              className="text-sm md:text-base hover:text-gray-600"
            >
              소그룹 모임
            </Link>
            <Link
              href="/bookshelf"
              className="text-sm md:text-base hover:text-gray-600"
            >
              모임추기 및 서평
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">북클럽 나란</h2>
        <p className="text-lg mb-8">독서와 소통을 위한 온라인 독서토론 모임</p>

        <p className="text-base mb-12 leading-relaxed">
          북클럽 나란에 오신 것을 환영합니다. 시간과 공간의 제약을 넘어나
          온라인에서 독서를 통한 읽기, 쓰기, 말하기를 통해 생각을 다듬고, 나아가
          우리의 삶과 세상을 변천시키고자 하는 분들의 모임입니다.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Button
            variant="outline"
            className="rounded-full px-6 py-6 border-2 border-black hover:bg-gray-100"
          >
            신규회원 가입 상담 카톡방
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-6 py-6 border-2 border-black hover:bg-gray-100"
          >
            슬랙 서버 가입 링크
          </Button>
        </div>

        <div className="flex justify-center mb-12">
          <div className="border p-2 w-32">
            <Image
              src="/placeholder.svg?height=60&width=120&text=YES24.COM"
              alt="YES24.COM"
              width={120}
              height={60}
              className="mx-auto"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">"북클럽 나란"이란?</h2>
        <p className="text-lg mb-8">
          정기적 독서와 온라인 토론, 회원 주도 소모임으로 특화된 모임 지원
        </p>

        <p className="text-base mb-16 leading-relaxed">
          성실한 독서는 지식의 깊이와 폭을 더해줍니다. 건설적인 토론은 개인
          지원의 지식을 검증하고 발전시켜 공극적으로 사회 공동체의 지식으로
          승화시켜줄 수 있습니다. 건설적인 토론을 위한 준비 과정은 성실한 독서를
          유도하고, 성실한 독서는 건설적인 토론의 근간이 됩니다. 우리는 성실한
          독서와 건설적인 토론으로 개개인의 지식의 깊이와 폭을 더해 공극적으로
          사회 공동체에 기여하기를 원하는 사람들의 모임입니다.
        </p>

        {/* 최신 공지사항 섹션 */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Bell className="mr-4 h-6 w-6" />
            <h2 className="text-2xl font-bold">최신 공지사항</h2>
          </div>
          <div className="border rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">2025년 3월 모임 공지</span>
                <span className="text-gray-500 text-sm">2025.02.26</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">2025년 3월 모임 공지</span>
                <span className="text-gray-500 text-sm">2025.02.26</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">2025년 3월 모임 공지</span>
                <span className="text-gray-500 text-sm">2025.02.26</span>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Link
                href="/announcements"
                className="text-blue-600 hover:underline text-sm"
              >
                더 보기 →
              </Link>
            </div>
          </div>
        </div>

        {/* 예정 독서모임 섹션 */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <CalendarDays className="mr-2 h-6 w-6" />
            <h2 className="text-2xl font-bold">예정 독서모임</h2>
          </div>
          <div className="border rounded-lg p-6">
            <div className="space-y-6">
              <div className="flex gap-4 border-b pb-4">
                <div className="flex-shrink-0 bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-center w-16 h-16">
                  <span className="font-bold">Sat, Mar 22</span>
                </div>
                <div className="flex-grow text-left">
                  <h3 className="font-bold">민주주의 위기 탐낭독</h3>
                  <div className="flex items-center mt-1">
                    <BookOpen className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-600">민주주의</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 border-b pb-4">
                <div className="flex-shrink-0 bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-center w-16 h-16">
                  <span className="font-bold">Sat, Mar 22</span>
                </div>
                <div className="flex-grow text-left">
                  <h3 className="font-bold">민주주의 위기 탐낭독</h3>
                  <div className="flex items-center mt-1">
                    <BookOpen className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-600">민주주의</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 border-b pb-4">
                <div className="flex-shrink-0 bg-gray-100 p-2 rounded-lg flex flex-col items-center justify-center w-16 h-16">
                  <span className="font-bold">Sat, Mar 22</span>
                </div>
                <div className="flex-grow text-left">
                  <h3 className="font-bold">민주주의 위기 탐낭독</h3>
                  <div className="flex items-center mt-1">
                    <BookOpen className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-600">민주주의</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Link
                href="/schedule"
                className="text-blue-600 hover:underline text-sm"
              >
                전체 일정 보기 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
