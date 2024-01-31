/*
*	0: success
*	1: no extension found
*/
int decomposeFileName(char* fullName, char** nameToSetFormal, char** extensionToSetFormal){
	char* extensionToSet = NULL, *nameToSet = NULL;


	extensionToSet = strrchr(fullName, '.');
	if(!extensionToSet || (*(extensionToSet+1) == '\0')){
		return 1;
	}
	
	int nameLength = extensionToSet - fullName;
	extensionToSet++;
	int fullNameLength = strlen(fullName);
	int extensionLength = fullNameLength - nameLength - strlen(".");
	
	
	nameToSet = (char*)malloc(nameLength * sizeof(char) + sizeof(char));
	for(int i=0;i<nameLength;i++){
		nameToSet[i] = fullName[i];
	}
	nameToSet[nameLength] = '\0';
	
	*extensionToSetFormal = extensionToSet;
	*nameToSetFormal = nameToSet;
	
	return 0;
}