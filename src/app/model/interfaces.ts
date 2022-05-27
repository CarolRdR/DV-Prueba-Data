export interface ResponseDataI {
  response: [
    {
      CLIENT_ID: number;
      CLIENT_NAME: string;
      COUNTER: number;
      DESCRIPTION: string;
      DEVICE: string;
      MORE_INFO: {
        ACTIVE: boolean;
        END_DATE: string;
        RELATIONS_IDS: Array<number>;

        START_DATE: string;
        WORK: string;
      };
    }
  ];
}
