/*****************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.   *
 *                                                                            *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may   *
 *  not use this file except in compliance with the License. A copy of the    *
 *  License is located at                                                     *
 *                                                                            *
 *      http://www.apache.org/licenses/LICENSE-2.0                            *
 *                                                                            *
 *  or in the 'license' file accompanying this file. This file is distributed *
 *  on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,        *
 *  express or implied. See the License for the specific language governing   *
 *  permissions and limitations under the License.                            *
 *****************************************************************************/
import * as cdk from "aws-cdk-lib"
import {Construct} from "constructs";
import {testResourceProviders} from "../e2e-tests";
import {CfnOutput} from "aws-cdk-lib";

export class E2eTestStack extends cdk.Stack {

  outputs: Record<string, CfnOutput> = {}
  constructor(scope: Construct, id: string) {
    super(scope, id);

    for (const testResourceProvider of testResourceProviders) {
      let output = testResourceProvider.createTestResources(this);
      this.outputs = {...this.outputs, ...output}
    }

    cdk.Stack.of(this);
  }
}
