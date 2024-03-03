# 🍚 Goodbap

## OVERVIEW

### 기획

- 프랜차이즈 매장이 아닌 지역별 진짜 맛집을 찾기 위한 서비스 개발

### 목표

- 공통
  - 웹서비스 개발에 대한 전반적인 과정을 이해하고 경험
  - Front-End와 Back-End의 협업 방식과 과정에 대한 이해와 경험
- Front-End
  - React 기반 Front-End 개발에 대한 이해와 경험
  - 컴포넌트 재사용 및 사용자 친화적 UI / UX 구성을 목표
- Back-End
  - JAVA, Spring 기반 Back-end 개발에 대한 이해와 경험
  - AWS와 Github Actions를 이용한 배포 및 CI/CD에 대한 이해와 경험

### 기능

- 현재 위치를 기반으로 주변 맛집 검색기능
- 지역 명칭을 기반으로 맛집 검색 기능
- 검색 결과에서 대형 프랜차이즈 브랜드에 속한 음식점 제거
- 음식점 상세 정보를 지도 및 텍스트로 표시
  - 지도상의 위치
  - 식당의 이름과 전화번호, 주소
  - 검색 위치로부터의 거리
  - Kakao place 링크

## Stack

### Front-end

| Role                        | Type                                                                                                                                                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <b>Library</b>              | ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)                                                                                                                |
| <b>Programming Language</b> | ![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)                                                                                                          |
| <b>Styling</b>              | ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                            |
| <b>Formatting</b>           | ![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) ![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) |
| <b>Package Manager</b>      | ![yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                                    |

### Back-end

- Spring : `3.2.2`(Java 17)
- Test : `JUnit4`, `AssertJ`
- Build : `gradle`
- DB : `MySQL`(Amazon RDS)
- IDE : `Visual Studio Code`
- CI/CD : `Github Actions`, `Amazon CodeDeploy`

## Structure

### 서비스 구조

![서비스 구조](https://github.com/Goodbap/.github/assets/67535039/76625537-cdd9-42af-9c45-ef8449425e4c)

### CI/CD 구조

![배포 구조](https://github.com/Goodbap/.github/assets/67535039/975e0ba5-6e4b-4172-8086-602b7d22716b)
