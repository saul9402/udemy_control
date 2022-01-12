
/**
 * https://www.tutorialsteacher.com/typescript/typescript-generic-class
 */
export class PageImpl<T> {
    /**
     * https://stackoverflow.com/questions/37136679/how-to-convert-a-list-of-enity-object-to-page-object-in-spring-mvc-jpa
     * https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/PageImpl.html
     */
    content: Array<T> = new Array<T>();
    numberOfElements: number = 0;
    size: number = 0;
    totalElements: number = 0;
    totalPages: number = 0;
    number: number = 0;
    hasContent: boolean = false;
    isFirts: boolean = false;
    isLast: boolean = false;
}